import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'
import { ChatActive } from 'src/app/shared/models/chatActive'
import { ChatUser } from 'src/app/shared/models/chatUser'

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	constructor(
    private socket: Socket
  ) { }

	usersOnline = this.socket.fromEvent<ChatUser[]>('users online')
	chatsActive = this.socket.fromEvent<ChatActive[]>('chats active')

	login (username: string, userId: number, institutionId: number) {
		console.log(institutionId)
		this.socket.emit('login', { username, userId, institutionId })
	}

	logout () {
		this.socket.emit('logout')
	}

	newChat (destinyUser: { destinySocketId: string, destinyUserId: number }) {
		this.socket.emit('new chat', destinyUser)
	}

	closeChat (chatId: string) {
		this.socket.emit('close chat', { chatId })
	}

	sendMessage (chatId: string, message: string) {
		this.socket.emit('send message', { chatId, message })
	}
}
