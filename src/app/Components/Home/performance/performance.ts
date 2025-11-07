import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance',
  imports: [MainCard, CommonModule],
  templateUrl: './performance.html',
  styleUrl: './performance.css',
})
export class Performance {
  performanceSpecs = [
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Top Speed',
      text: 'Up to 135 km/h',
      progress: 95,
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'Torque',
      text: '800 Nm (High-Torque Mode)',
      progress: 90,
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Acceleration',
      text: '0–100 km/h in 3.8s',
      progress: 85,
    },
    {
      icon: 'fa-solid fa-mountain',
      title: 'Off-Road Grip',
      text: 'All-Terrain 4×4 Suspension',
      progress: 92,
    },
  ];
}
