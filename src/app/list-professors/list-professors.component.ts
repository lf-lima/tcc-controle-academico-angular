import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/shared/models/professor'
import { ProfessorService } from 'src/app/shared/services/professor.service'

@Component({
  selector: 'app-list-professors',
  templateUrl: './list-professors.component.html',
  styleUrls: ['./list-professors.component.scss']
})
export class ListProfessorsComponent implements OnInit {

  professors!: Professor[]

  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit(): void {
    this.professorService.getAllByInstitutionId().subscribe((response: any) => {
      const professors = response.body as any[]

      this.professors = professors.map(professor => {
        const documentNumber = professor.user.documentNumber

        delete professor.user

        return { ...professor, documentNumber }
      })
    })
  }
}
