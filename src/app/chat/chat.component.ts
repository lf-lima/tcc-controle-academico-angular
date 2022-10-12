import { Component, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { ChatService } from 'src/app/shared/services/chat.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  usersOnline!: Observable<{ username: string, userId: string }[]>

  chatsActive!: Observable<{
		chatId: string
		participants: { username: string, userId: string }[]
		position: number
    messages: {
      userId: string
      username: string
      message: string
    }[]
	}[]>

  constructor (
    private tokenService: TokenService,
    private chatService: ChatService
  ) { }

  ngOnInit (): void {
    this.usersOnline = this.chatService.usersOnline
    this.chatsActive = this.chatService.chatsActive
  }

  newChat (user: { username: string, userId: string }): void {
    console.log('novo chat:', user)

    this.chatService.newChat(user.userId, user.username)
  }

  sendMessage (chatId: string, message: string): void {
    this.chatService.sendMessage(chatId, message)
  }

  // userEnter () {
  //   const { username } = this.tokenService.getTokenPayload()
  //   console.log('enter user', username)
  //   this.socketService.userEnter(username)
  // }

  // fetchUsersOnline () {
  //   this.socketService.fetchUsersOnline().subscribe((response: any) => { this.usersOnline = response })
  // }
}
