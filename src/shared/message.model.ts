export enum MessageType {
    info = 0,
    warning = 1,
    danger = 2
}
  
export interface IMessage {
    id: string,
    type: MessageType,
    text: string
}
