import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  @Output()
  changeSign = new EventEmitter()

  @Output()
  changeAuth = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  change (event: any): void {
    this.changeSign.emit(true)
    event.stopPropagation();

  }

  changeAuthFunc(event: any) {
    this.changeAuth.emit(false)
    event.stopPropagation();

  }
}
