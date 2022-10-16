import { Component, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { ChatActive } from 'src/app/shared/models/chatActive'
import { ChatUser } from 'src/app/shared/models/chatUser'
import { ChatService } from 'src/app/shared/services/chat.service'
import { TokenService } from 'src/app/shared/services/token.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  usersOnline!: Observable<ChatUser[]>
  chatsActive!: Observable<ChatActive[]>

  constructor (
    private tokenService: TokenService,
    private chatService: ChatService
  ) { }

  ngOnInit (): void {
    this.usersOnline = this.chatService.usersOnline
    this.chatsActive = this.chatService.chatsActive
  }

  newChat (user: { socketId: string, userId: number }): void {
    console.log('novo chat:', user)

    this.chatService.newChat({ destinySocketId: user.socketId, destinyUserId: user.userId })
  }

  sendMessage (chatId: string, message: string): void {
    this.chatService.sendMessage(chatId, message)
  }
}
