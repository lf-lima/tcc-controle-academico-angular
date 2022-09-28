import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NewStudentInputDto } from 'src/app/shared/dtos/student/newStudentDto'

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor (
    private httpClient: HttpClient
  ) {}

  create (input: NewStudentInputDto) {
    return this.httpClient.post(
      `${environment.baseUrl}/student`,
      input
    )
  }
}
