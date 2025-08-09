import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TANK',
  RESET_TASK = 'RESET_TASK',
}

export type TaskActionsWithPayload = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsTypes.RESET_TASK;
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
