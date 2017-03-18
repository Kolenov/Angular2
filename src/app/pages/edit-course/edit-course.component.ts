import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { CourseItem } from '../../models/course-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cr-edit-course',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './edit-course.scss' ],
  templateUrl: './edit-course.html'
})

export class EditCourseComponent implements OnInit {
  public course$: Observable<CourseItem>;

  constructor(private route: ActivatedRoute, private CoursesService: CoursesService) {
  }

  public ngOnInit() {
    this.course$ = this.CoursesService.getCourse(this.route.params.value.id); // how correct get params id?
  }

  editCourse() {
    console.log('edit course');
  }
}
