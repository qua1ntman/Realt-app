import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() isSingIn: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  changeWayToIn() {
    this.isSingIn = !this.isSingIn
  }

}
