import { MouseEventHandler } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

export interface TaskComponentType {
  task: string;
  isCritical: boolean;
  isDone: boolean;
  setIsDone: Function;
  provided?: DraggableProvided;
}

export interface ModalComponentType {
  title: string;
  description?: string;
  comfirm: Function;
  cancel: MouseEventHandler<HTMLDivElement>;
  placeholder?: string;
  isTask?: boolean;
}