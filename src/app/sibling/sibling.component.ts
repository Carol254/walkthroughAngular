import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit{

  message: string | undefined;

  updatedMessage:string = 'Hello am from sibling';

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.currentMessage.subscribe(message =>this.message = message)
  }

  newMessage(){
    this.dataService.changeMessage("Hello am from sibling");
  }
}
