import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Input() isSingIn: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  changeWayToIn() {
    this.isSingIn = !this.isSingIn
  }
}
