import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { NewInstitutionInputDto } from 'src/app/shared/dtos/institution/newInstitutionDto'
import { InstitutionService } from 'src/app/shared/services/institution.service'
import { catchErrorFunction } from 'src/app/shared/utils/catchErrorFunction'

@Component({
  selector: 'app-new-institution',
  templateUrl: './new-institution.component.html',
  styleUrls: ['./new-institution.component.scss']
})
export class NewInstitutionComponent implements OnInit {
  newInstitutionForm = new FormGroup({
    name: new FormControl(''),
    about: new FormControl(''),
    documentNumber: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  constructor (
    private institutionService: InstitutionService
  ) { }

  ngOnInit (): void {
  }

  onSubmit () {
    this.institutionService.create(this.newInstitutionForm.value as NewInstitutionInputDto).subscribe(
      {
        next: (response) => {
          alert('Instituição criada com sucesso!')
          this.newInstitutionForm.reset()
        },
        error: catchErrorFunction
      }
    )
  }
}
