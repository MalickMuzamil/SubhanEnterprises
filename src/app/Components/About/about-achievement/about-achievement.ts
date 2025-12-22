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
      count: 'Thousands',
      text: 'ATV Quad Bikes Supplied Across Pakistan',
    },
    {
      icon: 'fa-solid fa-map-location-dot',
      count: 'Nationwide',
      text: 'Delivery Coverage Across All Major Cities of Pakistan',
    },
    {
      icon: 'fa-solid fa-briefcase',
      count: '18+ Years',
      text: 'Experience in ATV Quad Bike Industry',
    },
    {
      icon: 'fa-solid fa-users',
      count: 'Trusted',
      text: 'By Dealers & Customers Nationwide',
    },
  ];
}
