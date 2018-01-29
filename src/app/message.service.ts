import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  //messages property of string type assigned to blank string array
  messages: string[] = [];
 
  //function to push a message into the messages string array
  add(message: string) {
    this.messages.push(message);
  }

  //function to clear the array
  clear(){
    this.messages = [];
  }
  constructor() { }

}
