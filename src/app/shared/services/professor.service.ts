import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NewProfessorInputDto } from 'src/app/shared/dtos/professor/newProfessorDto'

@Injectable({ providedIn: 'root' })
export class ProfessorService {
  constructor (
    private httpClient: HttpClient
  ) {}

  create (input: NewProfessorInputDto) {
    return this.httpClient.post(
      `${environment.baseUrl}/professor`,
      input
    )
  }
}
