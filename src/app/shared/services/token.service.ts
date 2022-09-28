import { Injectable } from '@angular/core'
import jwtDecode from 'jwt-decode'

@Injectable({ providedIn: 'root' })
export class TokenService {
  private tokenId: string = 'authToken'
  private permissionsId: string = 'userPermissions'

  getToken (): string | null {
    return window.localStorage.getItem(this.tokenId)
  }

  getPermissions (): string[] {
    const permissionsString = window.localStorage.getItem(this.permissionsId) as string
    return JSON.parse(permissionsString)
  }

  setToken (token: string): void {
    window.localStorage.setItem(this.tokenId, token)

    const permissions = this.getPermissionsFromToken(token)

    window.localStorage.setItem(this.permissionsId, JSON.stringify(permissions))
  }

  removeToken (): void {
    window.localStorage.removeItem(this.tokenId)
  }

  getPermissionsFromToken (token: string) {
    const decode = jwtDecode(token) as any
    return decode.permissions
  }
}
