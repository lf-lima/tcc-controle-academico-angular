import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { NewStudentInputDto } from 'src/app/shared/dtos/student/newStudentDto'
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
    confirmPassword: new FormControl('')
  })

  constructor (
    private studentService: StudentService
  ) { }

  ngOnInit (): void {
  }

  onSubmit () {
    this.studentService.create(this.newStudentForm.value as NewStudentInputDto).subscribe(
      {
        next: (response) => {
          alert('Aluno criado com sucesso!')
          this.newStudentForm.reset()
        },
        error: catchErrorFunction
      }
    )
  }
}
