import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{

  @ViewChild(ChildComponent) child:any;

  parentMessage = "message from parent";

  anotherMessageFromParent ="I am the second message";

  constructor(){}

  message:string | undefined;

  ngAfterViewInit(){
    this.message = this.child.message;
  }
}
