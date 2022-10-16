import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { tap } from 'rxjs'
import { TokenService } from './token.service'
import { ChatService } from 'src/app/shared/services/chat.service'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor (
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private chatService: ChatService
  ) {}

  authenticate (documentNumber: string, password: string) {
    return this.httpClient.post(
      `${environment.baseUrl}/login`,
      {
      documentNumber, password
      }
    ).pipe(tap((res: any) => {
      const token = res.body.token
      this.tokenService.setToken(token)
    }))
  }

  logout () {
    this.chatService.logout()
    this.tokenService.removeToken()
  }
}
