import { TaskStatus } from "../enums/task-status.enum";

export interface Task {
  _id: string; 
  title: string;
  text: string;
  status: TaskStatus;
  createdAt: Date;
}