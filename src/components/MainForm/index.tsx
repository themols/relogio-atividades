import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { ButtonDefault } from "../Button/ButtonDefault";
import { Cycles } from "../Cycles";
import { InputDefault } from "../Input/InputDefault";
import type React from "react";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

import type { TaskModel } from '../../models/TaskModel';
import { getNextCycleType } from '../../utils/getNextCycleType';

import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);


  const nextCycleType = getNextCycleType(state.currentCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      duration: state.config[nextCycleType],
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask })
    const worker = new Worker(
      new URL('../../worker/timerWorker.js', import.meta.url)
    );

    worker.postMessage('completo');
  }

  function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK })
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form'>
      <div className='formRow'>
        <InputDefault
          id='input'
          labelText='task'
          type='text'
          placeholder='digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (<ButtonDefault
          aria-label='Iniciar nova Tarefa'
          title='Iniciar nova Tarefa'
          type="submit"
          icon={<PlayCircleIcon />}
          key="button_Submit"
        />)}

        {!!state.activeTask && (
          <ButtonDefault
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="button_Interrupt"
          />)}

      </div>


    </form>
  );
}