import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	constructor(
    private socket: Socket
  ) { }

	usersOnline = this.socket.fromEvent<{ username: string, userId: string }[]>('users online')
	chatsActive = this.socket.fromEvent<{
		chatId: string
		participants: { username: string, userId: string }[]
		position: number
		messages: {
			userId: string
			username: string
			message: string
		}[]
	}[]>('chats active')

	login (username: string) {
		this.socket.emit('login', { username })
	}

	newChat (destinyUserId: string, destinyUsername: string) {
		this.socket.emit('new chat', { destinyUserId, destinyUsername })
	}

	sendMessage (chatId: string, message: string) {
		this.socket.emit('send message', { chatId, message })
	}
}
