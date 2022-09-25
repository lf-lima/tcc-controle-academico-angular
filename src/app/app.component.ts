import { Component } from '@angular/core'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private tokenService: TokenService
  ) {}

  title = 'tcc-controle-academico-angular';

  checkIfAuthenticated () {
    const token = this.tokenService.getToken()
    return !!token
  }
}
