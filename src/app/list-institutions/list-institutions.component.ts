import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/shared/models/institution'
import { InstitutionService } from 'src/app/shared/services/institution.service'

@Component({
  selector: 'app-list-institutions',
  templateUrl: './list-institutions.component.html',
  styleUrls: ['./list-institutions.component.scss']
})
export class ListInstitutionsComponent implements OnInit {

  institutions!: Institution[]

  constructor(
    private institutionService: InstitutionService
  ) { }

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
}
