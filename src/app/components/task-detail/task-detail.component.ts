import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task-service/task.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  task!: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('taskId'); 
    this.taskService.getTask(String(taskId)).subscribe(task => {
      this.task = task;
    });
  }

  saveTask(): void {
    this.taskService.updateTask(this.task).subscribe(updatedTask => {
      this.task = updatedTask;
      console.log('Task updated successfully!');
    });
  }
}
