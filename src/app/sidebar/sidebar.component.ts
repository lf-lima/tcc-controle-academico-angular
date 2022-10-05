import { Component, OnInit } from '@angular/core'
import { TokenPayload } from 'src/app/shared/models/tokenPayload'
import { AuthService } from 'src/app/shared/services/auth.service'
import { TokenService } from 'src/app/shared/services/token.service'
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  icon = faSignOut

  constructor (
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  count = 0
  tokenPayload!: TokenPayload

  isAdmin = false
  isInstitution = false
  isProfessor = false
  isStudent = false

  ngOnInit (): void {
    this.tokenPayload = this.tokenService.getTokenPayload()
    this.checkUser()
  }

  checkHasPermission (requiredPermission: string): boolean {
    const { permissions } = this.tokenPayload
    return !!permissions.find(permission => permission === requiredPermission)
  }

  checkUser () {
    if (this.tokenPayload.studentId) {
      this.isStudent = true
    } else if (this.tokenPayload.professorId) {
      this.isProfessor = true
    } else if (this.tokenPayload.institutionId) {
      this.isInstitution = true
    } else {
      this.isAdmin = true
    }
  }

  logout () {
    this.authService.logout()
  }
}
