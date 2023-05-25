import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})


export class ChildComponent {

  @Input() childMessage:string | undefined;

  @Input() secondMessage:string | undefined;

  @Output() messageEvent = new EventEmitter<string>();

  message ="Hello There!";

  greetings = "Hallo Mutter";

  
  sendMessage(){
    this.messageEvent.emit(this.greetings)
  }
}
