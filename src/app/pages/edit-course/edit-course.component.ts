import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'cr-edit-course',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './edit-course.scss' ],
  templateUrl: './edit-course.html'
})

export class EditCourseComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {}

  editCourse() {
    console.log('edit course');
  }
}
