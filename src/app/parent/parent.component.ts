import { Component,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{


  @ViewChild(ChildComponent) child:any;

  parentMessage = "message from parent";

  anotherMessageFromParent ="I am the second message";

  
  message:string | undefined;

  receivedGreeting:string | undefined;

  constructor(){}


  ngOnInit(): void {



  }

  receiveMessage($event: string) {
    this.receivedGreeting = $event;
    }


  // ngAfterViewInit(){
  //   this.message = this.child.message;
  // }

 
}
