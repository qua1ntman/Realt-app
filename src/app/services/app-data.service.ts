import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad } from 'types/ad';
import { Observable } from 'rxjs';
import { CITIES } from '../cities.mock';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {


  adsData!: Ad[]
  chosenAd!: Ad
  adEdition!: Ad

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

  setRegionCities(regionSelected: string): string[] {
    switch(regionSelected) {
      case 'Minsk region': 
        return CITIES.minskRegion
      case 'Vitebsk region': 
        return CITIES.vitebskRegion
      case 'Mogilev region': 
        return CITIES.mogilevRegion
      case 'Gomel region': 
        return CITIES.gomelRegion
      case 'Grodno region': 
        return CITIES.grodnoRegion
      case 'Brest region': 
        return CITIES.brestRegion
      default: 
        return CITIES.minskRegion
    }
  }

  getAdsDataHTTP(): Observable<Object> {
    const url = 'http://localhost:3000/api/ads'
    if (!this.adsData) {
      this.http.get(url).subscribe(
        data => this.adsData = Object.values(data)
        )
    }
    return this.http.get(url)
  }

  postNewAdHTTP(ad: any) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdE5hbWUiOiJNaXNoYSIsImxhc3ROYW1lIjoiQXNobGEiLCJlbWFpbCI6IkFzaGxhQG1haWwucnUiLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQ2NjQxODUyLCJleHAiOjE2NDY2NDU0NTJ9._XMqe4Cu1RqFbOtqdy9FwZ0kMiMOBtfv9mYxdqU7tGg'
    const url = 'http://localhost:3000/api/ads'
    this.http.post(url, ad, {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
  }

  putChangeAdDataHTTP(ad: Ad) {
    const url = `http://localhost:3000/api/ads/${ad.id}`
    const {id, ...newObj} = ad
    this.http.put(url, newObj)
  }


}
