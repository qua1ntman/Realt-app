import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-ads-moderation',
  templateUrl: './ads-moderation.component.html',
  styleUrls: ['./ads-moderation.component.css']
})
export class AdsModerationComponent implements OnInit {

  ads: Ad[] = [
    {
      title: 'House',
      city: 'Minsk',
      date: new Date(2022, 2, 4).toLocaleDateString(),
      price: 100000
    },
    {
      title: 'Villa',
      city: 'Minsk',
      date: new Date(2022, 5, 14).toLocaleDateString(),
      price: 200000
    },
    {
      title: 'Penthouse',
      city: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      title: 'Penthouse',
      city: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      title: 'Penthouse',
      city: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      title: 'Penthouse',
      city: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      title: 'Penthouse',
      city: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      title: 'Penthouse',
      city: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
