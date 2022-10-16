import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { NewStudentInputDto } from 'src/app/shared/dtos/student/newStudentDto'
import { Course } from 'src/app/shared/models/course'
import { CourseService } from 'src/app/shared/services/course.service'
import { StudentService } from 'src/app/shared/services/student.service'
import { catchErrorFunction } from 'src/app/shared/utils/catchErrorFunction'

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  newStudentForm = new FormGroup({
    name: new FormControl(''),
    about: new FormControl(''),
    documentNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    courseId: new FormControl(0)
  })

  courses!: Course[]

  constructor (
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit (): void {
    this.courseService.getAllByInstitutionId().subscribe((response: any) => { this.courses = response.body })
  }

  onSubmit () {
    const newStudentForm = this.newStudentForm.value
    newStudentForm.courseId = Number(newStudentForm.courseId)

    this.studentService.create(newStudentForm as NewStudentInputDto).subscribe(
      {
        next: (response) => {
          alert('Estudante criado com sucesso!')
          this.newStudentForm.reset()
          this.router.navigate(['/students'])
        },
        error: catchErrorFunction
      }
    )
  }
}
