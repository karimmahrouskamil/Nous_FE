import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskModule } from './modules/task.module';

const routes: Routes = [{ path: 'tasks', component: TaskListComponent },
{ path: 'tasks/:taskId', component: TaskDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), TaskModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
