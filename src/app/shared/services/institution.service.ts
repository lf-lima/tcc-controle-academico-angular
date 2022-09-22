import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class InstitutionService {
  constructor (
    private httpClient: HttpClient
  ) {}

  create () {
    return this.httpClient.post(
      `${environment.baseUrl}/institution`,
      {
        "name": "UniFodase2",
        "about": "Uma merda",
        "documentNumber": "6666661234",
        "test": "1234",
        "password": "puredebatata",
        "confirmPassword": "puredebatata"
      }
    )
  }
}
