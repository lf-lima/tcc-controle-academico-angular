import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'

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
    private router: Router
  ) { }

  ngOnInit (): void {
  }

  login (documentNumber: string, password: string) {
    this.authService.authenticate(documentNumber, password).subscribe((res) => {
      this.router.navigate(['/dashboard'])
    })
  }
}
