import { Component,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../services/data.service';

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

  newInfo:string | undefined;

  constructor(private dataService:DataService){}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message =>this.newInfo = message )
  }

  receiveMessage($event: string) {
    this.receivedGreeting = $event;
    }

  // ngAfterViewInit(){
  //   this.message = this.child.message;
  // }

}
