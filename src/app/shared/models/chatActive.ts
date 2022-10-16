import { ChatUser } from './chatUser'

export interface ChatActive {
  chatId: string
  participants: ChatUser[]
  position: number
  messages: {
    user: ChatUser
    message: string
  }[]
}
