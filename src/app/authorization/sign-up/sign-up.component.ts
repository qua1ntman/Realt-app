import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  @Output()
  changeSign = new EventEmitter()

  @Output()
  changeAuth = new EventEmitter()


  ngOnInit() {
  }

  change (event: any): void {
    event.stopPropagation();
    this.changeSign.emit(false)
  }

  changeAuthFunc(event: any) {
    event.stopPropagation();
    
    this.changeAuth.emit(false)
  }
}
