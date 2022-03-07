import { Component, OnInit } from '@angular/core';
import { AppDataService } from './../../services/app-data.service';

@Component({
  selector: 'app-create-new-ad-page',
  templateUrl: './create-new-ad-page.component.html',
  styleUrls: ['./create-new-ad-page.component.css']
})
export class CreateNewAdPageComponent implements OnInit {

  newAd: any = {
    title: '',
    price: 0,
    location: [],
    description: ''
  }

  regionSelected!: string

  cities!: string[]

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    this.cities = this.appDataService.setRegionCities(this.regionSelected)
  }

  createAd() {
    this.newAd.location = `${this.newAd.location[0]}, ${this.newAd.location[1]}, ${this.newAd.location[2]} ${this.newAd.location[3]}`
    console.log(this.newAd);
    this.appDataService.postNewAdHTTP(this.newAd)
  }

}
