import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { NewProfessorInputDto } from 'src/app/shared/dtos/professor/newProfessorDto'
import { ProfessorService } from 'src/app/shared/services/professor.service'

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.scss']
})
export class NewProfessorComponent implements OnInit {
  newProfessorForm = new FormGroup({
    name: new FormControl(''),
    about: new FormControl(''),
    documentNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  constructor (
    private professorService: ProfessorService
  ) { }

  ngOnInit (): void {
  }

  onSubmit () {
    this.professorService.create(this.newProfessorForm.value as NewProfessorInputDto).subscribe(
      {
        next: (response) => {
          alert('Professor criado com sucesso!')
          this.newProfessorForm.reset()
        },
        error: ({ error: responseError }) => {
          const body = responseError.body

          for (const error of body) {
            for (const errorMessage of error.messages) {
              alert(errorMessage)
            }
          }
        }
      }
    )
  }
}
