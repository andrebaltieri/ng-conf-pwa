import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css'],
  providers: [
    CourseService
  ]
})

export class ListCoursesComponent implements OnInit {
  courses: Course[];
  errorMessage: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(data => this.courses = data, error => console.log(error));
  }
}
