import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NewInstitutionInputDto } from 'src/app/shared/dtos/institution/newInstitutionDto'

@Injectable({ providedIn: 'root' })
export class InstitutionService {
  constructor (
    private httpClient: HttpClient
  ) {}

  create (input: NewInstitutionInputDto) {
    return this.httpClient.post(
      `${environment.baseUrl}/institution`,
      input
    )
  }
}
