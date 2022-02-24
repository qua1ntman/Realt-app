import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  isSignIn: boolean = true
  
  constructor() { }

  @Output()
  changeAuthHidding = new EventEmitter()

  changeSignInAndSignUp(arg: boolean): void {
    this.isSignIn = arg
  }

  changeAuth(value: boolean) {
    this.changeAuthHidding.emit(value)
  }

  ngOnInit() {
  }

}
