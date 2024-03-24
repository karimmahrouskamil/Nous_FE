import { TaskStatus } from "../enums/task-status.enum";

export interface Task {
  id: string;
  title: string;
  text: string;
  status: TaskStatus;
  createdAt: Date;
}