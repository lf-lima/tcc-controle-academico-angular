import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class TokenService {
  private authToken: string = 'authToken'

  getToken (): string | null {
    return window.localStorage.getItem(this.authToken)
  }

  setToken (token: string): void {
    window.localStorage.setItem(this.authToken, token)
  }

  removeToken (): void {
    window.localStorage.removeItem(this.authToken)
  }
}
