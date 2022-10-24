import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Institution } from 'src/app/shared/models/institution'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'
import { InstitutionService } from 'src/app/shared/services/institution.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-list-institutions',
  templateUrl: './list-institutions.component.html',
  styleUrls: ['./list-institutions.component.scss']
})
export class ListInstitutionsComponent implements OnInit {

  iconPlus = faPlus

  institutions!: Institution[]
  tokenPayload!: TokenPayload

  constructor(
    private institutionService: InstitutionService,
    private tokenService: TokenService
  ) {
    this.tokenPayload = this.tokenService.getTokenPayload()
  }

  ngOnInit(): void {
    this.institutionService.getAllInstitutions().subscribe((response: any) => {
      const institutions = response.body as any[]

      this.institutions = institutions.map(institution => {
        const documentNumber = institution.user.documentNumber

        delete institution.user

        return { ...institution, documentNumber }
      })
    })
  }

  checkHasPermission (requiredPermission: string): boolean {
    const { permissions } = this.tokenPayload
    return !!permissions.find(permission => permission === requiredPermission)
  }
}
