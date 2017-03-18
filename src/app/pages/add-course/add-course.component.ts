import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'cr-add-course',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: [ './add-course.scss' ],
  templateUrl: './add-course.html'
})

export class AddCourseComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {}

  createCourse() {
    console.log('create course');
  }
}
