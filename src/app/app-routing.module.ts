import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskModule } from './task/task.module';

const routes: Routes = [ { path: 'tasks', component: TaskListComponent },
{ path: 'tasks/:taskId', component: TaskDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),TaskModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
