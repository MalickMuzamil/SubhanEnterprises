import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-achievement',
  imports: [MainCard, CommonModule],
  templateUrl: './about-achievement.html',
  styleUrl: './about-achievement.css',
})
export class AboutAchievement {
  achievements = [
    {
      icon: 'fa-solid fa-motorcycle',
      count: '100000+',
      text: 'ATVs Delivered'
    },
    {
      icon: 'fa-solid fa-map-location-dot',
      count: 'All Provinces',
      text: 'Nationwide Delivery Across Pakistan'
    },
    {
      icon: 'fa-solid fa-briefcase',
      count: '18+',
      text: 'Years of Industry Experience'
    },
    {
      icon: 'fa-solid fa-users',
      count: '100000+',
      text: 'Happy Customers'
    }
  ];

}
