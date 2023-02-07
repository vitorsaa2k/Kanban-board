export interface UserType {
  name: string;
  board: MarkerType[]
}

export interface MarkerType {
  title?: string;
  color?: string;
  tasks: TaskType[]
}

export interface TaskType {
  task: string;
  isCritical: boolean;
  isDone: boolean;
  id: string;
}