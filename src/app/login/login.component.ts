import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  documentNumber = new EventEmitter<string>()

  @Output()
  password = new EventEmitter<string>()

  constructor (
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit (): void {
    this.checkIfAuthenticated()
  }

  checkIfAuthenticated () {
    const token = this.tokenService.getToken()

    if (token) {
      this.router.navigate(['/testing'])
    }
  }

  login (documentNumber: string, password: string) {
    this.authService.authenticate(documentNumber, password).subscribe((res) => {
      this.router.navigate(['/testing'])
    })
  }
}
