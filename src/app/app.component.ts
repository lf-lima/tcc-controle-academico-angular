import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-controle-academico-angular'
  usersOnline: Array<{ username: string, socketId: string }> = [{ username: 'User Example', socketId: '123' }]

  constructor (
    private tokenService: TokenService,
    private router: Router
  ) { }

  checkIsLogin () {
    const url = this.router.url

    return url === '/' || url === '/login'
  }

  checkIfAuthenticated () {
    return !!this.tokenService.getToken()
  }
}
