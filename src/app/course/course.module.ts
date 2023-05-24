import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarModule } from '../shared/components/star/star.module';
import { PipeModule } from '../shared/pipes/pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', component: CourseListComponent
      },
    ])
  ]
})
export class CourseModule { }
