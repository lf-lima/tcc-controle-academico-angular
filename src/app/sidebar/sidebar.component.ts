import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/shared/services/auth.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor (
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  count = 0
  permissions!: string[]

  ngOnInit (): void {
    this.permissions = this.tokenService.getPermissions()
  }

  checkHasPermission (requiredPermission: string): boolean {
    return !!this.permissions.find(permission => permission === requiredPermission)
  }

  checkHasChildren (test: any): boolean {
    console.log(test)

    return true
  }

  logout () {
    this.authService.logout()
  }
}
