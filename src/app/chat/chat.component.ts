import { Component, HostListener, OnInit, Renderer2 } from '@angular/core'
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

  currentUser!: { username: string; userId: number }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent (event: KeyboardEvent) {
    const inputMessage = document.getElementById(`input-${this._chatFocused}`) as any
    if (inputMessage) {
      inputMessage.focus()

      if (event.key === 'Enter') {
        this.sendMessage(this._chatFocused, inputMessage.value)
      }
    }
  }

  constructor (
    private tokenService: TokenService,
    private chatService: ChatService,
    private renderer: Renderer2
  ) { }

  ngOnInit (): void {
    this.usersOnline = this.chatService.usersOnline
    this.chatsActive = this.chatService.chatsActive

    const { username, userId } = this.tokenService.getTokenPayload()
    this.currentUser = {
      username,
      userId
    }
  }

  newChat (user: { socketId: string, userId: number }): void {
    this.chatService.newChat({ destinySocketId: user.socketId, destinyUserId: user.userId })
  }

  closeChat (chatId: string) {
    this.chatService.closeChat(chatId)
  }

  sendMessage (chatId: string, message: string): void {
    if (message) {
      this.chatService.sendMessage(chatId, message)
    }
  }

  chatFocused (chatId: string) {
    this._chatFocused = chatId
  }
}
