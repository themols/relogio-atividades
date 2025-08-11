import type { TaskModel } from '../../models/TaskModel';

export const TaskActionsTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_TASK: 'RESET_TASK',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
} as const;

export type TaskActionsTypes =
  (typeof TaskActionsTypes)[keyof typeof TaskActionsTypes];

export type TaskActionsWithPayload =
  | {
      type: typeof TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: typeof TaskActionsTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    };

export type TaskActionsWithoutPayload =
  | {
      type: typeof TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: typeof TaskActionsTypes.RESET_TASK;
    }
  | {
      type: typeof TaskActionsTypes.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
