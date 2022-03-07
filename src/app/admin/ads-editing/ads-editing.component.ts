import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from './../../services/app-data.service';

@Component({
  selector: 'app-ads-editing',
  templateUrl: './ads-editing.component.html',
  styleUrls: ['./ads-editing.component.css']
})
export class AdsEditingComponent implements OnInit{

  ads!: Ad[]

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    if (this.appDataService.adsData) {
      this.ads = this.appDataService.adsData
    } else {
      this.appDataService.getAdsDataHTTP().subscribe(data => this.ads = Object.values(data))
    }
  }

  chosenAdToEdit(ad: Ad): void {
    this.appDataService.putChangeAdDataHTTP(ad)
  }
}
