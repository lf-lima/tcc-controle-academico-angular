import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { NewSubjectInputDto } from 'src/app/shared/dtos/subject/newSubjectDto'

@Injectable({ providedIn: 'root' })
export class SubjectService {
  constructor (
    private httpClient: HttpClient
  ) { }

  create (input: NewSubjectInputDto) {
    return this.httpClient.post(
      `${environment.baseUrl}/subject`,
      input
    )
  }

  getAllSubjects () {
    return this.httpClient.get(`${environment.baseUrl}/subject`)
  }

  getSubjectById (subjectId: number) {
    return this.httpClient.get(`${environment.baseUrl}/subject/${subjectId}`)
  }

  uploadFile (subjectId: number, file: File) {
    const formData = new FormData()
    formData.append('uploaded_file', file, file.name)

    return this.httpClient.post(`${environment.baseUrl}/subject/${subjectId}/file/upload`, formData)
  }
}
