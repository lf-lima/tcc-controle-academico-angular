import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course'
import { CourseService } from 'src/app/shared/services/course.service'

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  courses!: Course[]

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getAllByInstitutionId().subscribe((response: any) => { this.courses = response.body })
  }
}
