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
    count: '1000+',
    text: 'ATVs Delivered'
  },
  {
    icon: 'fa-solid fa-globe',
    count: '25+',
    text: 'Countries Reached'
  },
  {
    icon: 'fa-solid fa-award',
    count: '15+',
    text: 'Industry Awards'
  },
    {
    icon: 'fa-solid fa-users',
    count: '5000+',
    text: 'Happy Riders'
  }
];

}
