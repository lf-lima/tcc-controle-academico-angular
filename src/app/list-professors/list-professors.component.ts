import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Professor } from 'src/app/shared/models/professor'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'
import { ProfessorService } from 'src/app/shared/services/professor.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-list-professors',
  templateUrl: './list-professors.component.html',
  styleUrls: ['./list-professors.component.scss']
})
export class ListProfessorsComponent implements OnInit {

  iconPlus = faPlus

  professors!: Professor[]
  tokenPayload!: TokenPayload

  constructor(
    private professorService: ProfessorService,
    private tokenService: TokenService
  ) {
    this.tokenPayload = this.tokenService.getTokenPayload()
  }

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

  checkHasPermission (requiredPermission: string): boolean {
    const { permissions } = this.tokenPayload
    return !!permissions.find(permission => permission === requiredPermission)
  }
}
