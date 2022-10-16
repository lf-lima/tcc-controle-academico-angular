import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TokenService } from './token.service'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { ChatService } from 'src/app/shared/services/chat.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor (
    private tokenService: TokenService,
    private router: Router,
    private chatService: ChatService
  ) {}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = this.tokenService.getToken()

    if (token) {
      const { username, userId } = this.tokenService.getTokenPayload()
      this.chatService.login(username, userId)

      return true
    } else {
      this.router.navigate([ '/login' ])
      return false
    }
  }
}
