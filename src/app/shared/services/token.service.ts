import { Injectable } from '@angular/core'
import jwtDecode from 'jwt-decode'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'

@Injectable({ providedIn: 'root' })
export class TokenService {
  private tokenId = 'authToken'
  private tokenPayload = 'tokenPayload'

  getToken (): string | null {
    return window.localStorage.getItem(this.tokenId)
  }

  getTokenPayload (): TokenPayload {
    const tokenPayloadString = window.localStorage.getItem(this.tokenPayload) as string
    return JSON.parse(tokenPayloadString)
  }

  setToken (token: string): void {
    window.localStorage.setItem(this.tokenId, token)

    const tokenPayload = this.decodeToken(token)

    window.localStorage.setItem(this.tokenPayload, JSON.stringify(tokenPayload))
  }

  removeToken (): void {
    window.localStorage.removeItem(this.tokenId)
  }

  decodeToken (token: string) {
    return jwtDecode(token) as any
  }
}
