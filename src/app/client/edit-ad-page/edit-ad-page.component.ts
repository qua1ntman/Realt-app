import { Component, OnInit } from '@angular/core';
import { AppDataService } from './../../services/app-data.service';
import { CITIES } from './../../cities.mock';

@Component({
  selector: 'app-edit-ad-page',
  templateUrl: './edit-ad-page.component.html',
  styleUrls: ['./edit-ad-page.component.css']
})
export class EditAdPageComponent implements OnInit {

  //changes here change data in service (how it works?)
  adEdition!: any

  regionSelected!: string

  cities!: string[]

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    this.adEdition = this.appDataService.adEdition
    this.adEdition.location = this.adEdition.location.split(', ')
    this.adEdition.location[2] = this.adEdition.location[2].split(' ')
    this.regionSelected = this.adEdition.location[0]
    this.cities = this.appDataService.setRegionCities(this.regionSelected)
  }

  changeAdData(): void {
    this.adEdition.location[2] = this.adEdition.location[2].join(' ')
    this.adEdition.location = this.adEdition.location.join(', ')
    console.log(this.adEdition);
    
    this.appDataService.putChangeAdDataHTTP(this.adEdition)
  }

}
