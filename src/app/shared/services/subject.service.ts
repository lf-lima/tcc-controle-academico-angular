import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NewSubjectInputDto } from 'src/app/shared/dtos/subject/newSubjectDto'

@Injectable({ providedIn: 'root' })
export class SubjectService {
  constructor (
    private httpClient: HttpClient
  ) {}

  create (input: NewSubjectInputDto) {
    return this.httpClient.post(
      `${environment.baseUrl}/subject`,
      input
    )
  }
}
