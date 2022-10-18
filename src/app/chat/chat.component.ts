import { Component, HostListener, OnInit } from '@angular/core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs'
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

  iconSendMessage = faPaperPlane
  _chatFocused!: string

  usersOnline!: Observable<ChatUser[]>
  chatsActive!: Observable<ChatActive[]>

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const inputMessage = document.getElementById(this._chatFocused) as any
      this.sendMessage(this._chatFocused, inputMessage.value)
    }
  }

  constructor (
    private tokenService: TokenService,
    private chatService: ChatService
  ) { }

  ngOnInit (): void {
    this.usersOnline = this.chatService.usersOnline
    this.chatsActive = this.chatService.chatsActive
  }

  newChat (user: { socketId: string, userId: number }): void {
    this.chatService.newChat({ destinySocketId: user.socketId, destinyUserId: user.userId })
  }

  sendMessage (chatId: string, message: string): void {
    this.chatService.sendMessage(chatId, message)
  }

  chatFocused (chatId: string) {
    this._chatFocused = chatId
  }
}
