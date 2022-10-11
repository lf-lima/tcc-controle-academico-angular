import { Component } from '@angular/core'
import { SocketService } from 'src/app/shared/services/socket.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tcc-controle-academico-angular'
  token!: string | null

  constructor (
    private tokenService: TokenService,
    private socketService: SocketService
  ) {
    this.token = this.tokenService.getToken()
    this.userEnter()
  }

  userEnter() {
    if (this.token) {
      const { username } = this.tokenService.getTokenPayload()
      console.log('enter user', username)
      this.socketService.userEnter(username)
    }
  }

  checkIfAuthenticated () {
    this.token = this.tokenService.getToken()
    return !!this.token
  }
}
