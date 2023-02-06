import { MouseEventHandler, ReactNode } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

export interface TaskComponentType {
  task: string;
  isCritical: boolean;
  isDone: boolean;
  setIsDone: Function;
  provided?: DraggableProvided;
}

export interface ModalComponentType {
  cancel: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}