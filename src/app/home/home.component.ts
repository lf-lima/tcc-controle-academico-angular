import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/shared/services/socket.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    console.log('connect')
    this.socketService.onFetchMessages().subscribe((data: any) => console.log('TESTE: ', data))
    console.log('messages')
  }

}
