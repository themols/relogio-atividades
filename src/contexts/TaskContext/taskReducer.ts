import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToTime } from '../../utils/formatSecondsToTime';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionsTypes, type TaskActionModel } from './TaskActions';

export function TaskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondRemaining: formatSecondsToTime(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionsTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }

          return task;
        }),
      };
    }

    case TaskActionsTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask?.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }

          return task;
        }),
      };
    }

    case TaskActionsTypes.RESET_TASK: {
      return state;
    }

    case TaskActionsTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondRemaining: formatSecondsToTime(
          action.payload.secondsRemaining,
        ),
      };
    }
  }
  return state;
}
