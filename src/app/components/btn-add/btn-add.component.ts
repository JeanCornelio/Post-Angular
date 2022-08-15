import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-btn-add',
  template: `
  <div class="">
      <button class="btn" [ngClass]="[className]" (click)="onClick.emit()"> Add {{label}} </button>
  </div>`,
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {

  @Input() label!:string;
  @Input() className:string = "btn-primary";
  @Output() onClick = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }


  
    
  

}
