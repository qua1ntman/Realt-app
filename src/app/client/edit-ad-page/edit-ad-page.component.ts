import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from './../../services/app-data.service';

@Component({
  selector: 'app-edit-ad-page',
  templateUrl: './edit-ad-page.component.html',
  styleUrls: ['./edit-ad-page.component.css']
})
export class EditAdPageComponent implements OnInit {

  //changes here change data in service (how it works?)
  adEdition!: Ad

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    this.adEdition = this.appDataService.adEdition
    console.log(this.adEdition)
  }

  changeAdData(): void {
    this.appDataService.chosenAdEdited(this.adEdition)
  }

}
