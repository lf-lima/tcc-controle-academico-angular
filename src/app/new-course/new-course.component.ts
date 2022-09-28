import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { NewCourseInputDto } from 'src/app/shared/dtos/course/newCourseDto'
import { CourseService } from 'src/app/shared/services/course.service'
import { catchErrorFunction } from 'src/app/shared/utils/catchErrorFunction'

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  newCourseForm = new FormGroup({
    courseName: new FormControl(''),
    courseDescription: new FormControl('')
  })

  constructor (
    private courseService: CourseService
  ) { }

  ngOnInit (): void {
  }

  onSubmit () {
    this.courseService.create(this.newCourseForm.value as NewCourseInputDto).subscribe(
      {
        next: (response) => {
          alert('Curso criado com sucesso!')
          this.newCourseForm.reset()
        },
        error: catchErrorFunction
      }
    )
  }
}
