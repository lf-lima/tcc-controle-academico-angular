import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor (
    private authService: AuthService
  ) { }

  count = 0

  ngOnInit (): void {
  }

  logout () {
    this.authService.logout()
  }
}
