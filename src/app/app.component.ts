import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isWantToSignIn=false

  changeAuthoriationHidding(value: boolean): void {
    this.isWantToSignIn=value
  }


}
