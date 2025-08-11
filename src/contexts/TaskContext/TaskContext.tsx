import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import type { TaskActionModel } from "./TaskActions";
import { InitialTaskState } from "./initialTaskState";


type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
}

const initialContextValue = {
  state: InitialTaskState,
  dispatch: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);