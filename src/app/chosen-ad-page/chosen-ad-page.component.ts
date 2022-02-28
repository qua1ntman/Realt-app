import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-chosen-ad-page',
  templateUrl: './chosen-ad-page.component.html',
  styleUrls: ['./chosen-ad-page.component.css']
})
export class ChosenAdPageComponent implements OnInit {


  @Input()
  chosenAd: Ad = {
    pic: '',
    date: '',
    title: '',
    price: 0,
    location: ''
  }


  constructor() { }

  ngOnInit(): void {
    console.log('chosen', this.chosenAd);
  }

}
