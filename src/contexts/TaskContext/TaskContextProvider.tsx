import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { TaskReducer } from "./TaskReducer";
import { TimerWorkManager } from "../../workers/TimerWorkManager";
import { InitialTaskState } from "./initialTaskState";
import { TaskActionsTypes } from "./TaskActions";
import { loadBeep } from "../../utils/loadBeep";


type TaskContextProviderProps = {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(TaskReducer, InitialTaskState);
  const playBeepRef = useRef<ReturnType<typeof loadBeep>>(null);
  const worker = TimerWorkManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {

      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }

      dispatch({
        type: TaskActionsTypes.COMPLETE_TASK,
      });

      worker.terminate()
    } else {
      dispatch({
        type: TaskActionsTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      });
    }
  })

  useEffect(() => {

    if (!state.activeTask) {
      console.log('work terminado por falta de active task');
      worker.terminate();
    }

    worker.postMessage(state);

  }, [worker, state]);

  useEffect(() => {

    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }

  }, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}