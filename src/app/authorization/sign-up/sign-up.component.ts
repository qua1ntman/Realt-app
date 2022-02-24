import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../../../types/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '', 
  } 

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
    console.log(this.user);
    
    this.changeAuth.emit(false)
  }

  isFormFilled(): boolean {
    return Boolean(
      this.user.firstName &&
      this.user.lastName &&
      this.user.email &&
      this.user.phone &&
      this.user.password)
  }
}
