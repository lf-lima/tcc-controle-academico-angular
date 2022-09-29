import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'
import { TokenService } from 'src/app/shared/services/token.service'
import { catchErrorFunction } from 'src/app/shared/utils/catchErrorFunction'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    documentNumber: new FormControl(''),
    password: new FormControl('')
  })

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
      this.router.navigate(['/home'])
    }
  }

  login () {
    const { documentNumber, password } = this.loginForm.value
    this.authService.authenticate(documentNumber!, password!).subscribe({
      next: (res) => {
        this.router.navigate(['/home'])
      },
      error: catchErrorFunction
    })

  }
}
