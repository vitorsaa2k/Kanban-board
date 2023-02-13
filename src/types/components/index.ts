import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

export interface TaskComponentType {
  task: string;
  isCritical: boolean;
  isDone: boolean;
  setIsDone: Function;
  provided?: DraggableProvided;
}

export interface ModalComponentType {
  cancel: Function;
  children: ReactNode;
}

export interface ButtonComponentType extends ButtonHTMLAttributes<HTMLButtonElement> {}