import { Injectable } from '@angular/core'
import { Socket } from 'ngx-socket-io'

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	constructor(
    private socket: Socket
  ) {
  }

	// emit event
	userEnter () {
		this.socket.emit('user:enter', 'Luizao')
	}

	// listen event
	onFetchMessages () {
		return this.socket.fromEvent('message:render-olds')
	}
}
