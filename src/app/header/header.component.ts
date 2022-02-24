import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false

  @Output()
  changeAuthHidding = new EventEmitter()

  constructor() { }

  logged() {
    this.loggedIn = true
  }

  changeAuth() {
    this.changeAuthHidding.emit(true)
    this.logged()
  }

  ngOnInit(): void {
  }

}
