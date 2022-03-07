import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad } from 'types/ad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {


  adsData!: Ad[]
  chosenAd!: Ad
  adEdition!: Ad

  adsDataHTTP?: any

  constructor(private http: HttpClient) { }

  // randomColor(): string {
  //   return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
  // }

  chosenAdData(id: number) {
    this.chosenAd = this.adsData.find(ad => ad.id === id)!
  }

  chosenAdDataForEdition(ad: Ad) {
    this.adEdition = ad
  }

  chosenAdEdited(ad: Ad) {
    this.adEdition = ad
    this.adsData.forEach(thisAd => {
      if (thisAd.id === ad.id) thisAd = ad
    });
  }

  getAdsDataHTTP(): Observable<Object> {
    const url = 'http://localhost:3000/api/ads'
    this.http.get(url).subscribe(data => this.adsData =  Object.values(data))
    return this.http.get(url)
  }

  putChangeAdDataHTTP(ad: Ad) {
    const url = `http://localhost:3000/api/ads/${ad.id}`
    const {id, ...newObj} = ad
    this.http.put(url, newObj)
  }


}
