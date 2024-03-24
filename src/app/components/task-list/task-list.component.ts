import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(tasks => { this.tasks = tasks});
  }

  onTaskSelected(task: Task) {
    const taskId = task._id 
    this.router.navigate(['/tasks', Number(taskId)]); // Navigate to detail view with id
  }
}
