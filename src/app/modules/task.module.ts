import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskDetailComponent } from '../components/task-detail/task-detail.component';
import { TaskComponent } from '../Pages/task/task.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
})
export class TaskModule {
}
