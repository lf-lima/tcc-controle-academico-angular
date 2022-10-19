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
