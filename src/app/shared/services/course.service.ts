import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NewCourseInputDto } from 'src/app/shared/dtos/course/newCourseDto'

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor (
    private httpClient: HttpClient
  ) {}

  create (input: NewCourseInputDto) {
    return this.httpClient.post(
      `${environment.baseUrl}/course`,
      input
    )
  }

  getAllByInstitutionId () {
    return this.httpClient.get(`${environment.baseUrl}/course`)
  }
}
