import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { NewSubjectInputDto } from 'src/app/shared/dtos/subject/newSubjectDto'
import { Course } from 'src/app/shared/models/course'
import { Professor } from 'src/app/shared/models/professor'
import { CourseService } from 'src/app/shared/services/course.service'
import { ProfessorService } from 'src/app/shared/services/professor.service'
import { SubjectService } from 'src/app/shared/services/subject.service'
import { catchErrorFunction } from 'src/app/shared/utils/catchErrorFunction'

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.scss']
})
export class NewSubjectComponent implements OnInit {

  newSubjectForm = new FormGroup({
    subjectName: new FormControl(''),
    subjectDescription: new FormControl(''),
    courseId: new FormControl(0),
    professorId: new FormControl(0)
  })

  courses!: Course[]
  professors!: Professor[]

  constructor (
    private subjectService: SubjectService,
    private courseService: CourseService,
    private professorService: ProfessorService
  ) { }

  ngOnInit (): void {
    this.courseService.getAllByInstitutionId().subscribe((response: any) => { this.courses = response.body })
    this.professorService.getAllByInstitutionId().subscribe((response: any) => { this.professors = response.body })
  }

  onSubmit () {
    const newSubjectForm = this.newSubjectForm.value
    newSubjectForm.courseId = Number(newSubjectForm.courseId)
    newSubjectForm.professorId = Number(newSubjectForm.professorId)

    this.subjectService.create(newSubjectForm as NewSubjectInputDto).subscribe(
      {
        next: (response) => {
          alert('Matéria criada com sucesso!')
          this.newSubjectForm.reset()
        },
        error: catchErrorFunction
      }
    )
  }
}
