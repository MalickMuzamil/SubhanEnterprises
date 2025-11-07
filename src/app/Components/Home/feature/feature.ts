import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature',
  imports: [MainCard, CommonModule],
  templateUrl: './feature.html',
  styleUrl: './feature.css',
})
export class Feature {
  featureCards = [
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'High Performance',
      text: 'Engineered for speed, torque, and endurance across all terrains.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Durability',
      text: 'Built with reinforced frames and weather-resistant components.',
    },
    {
      icon: 'fa-solid fa-microchip',
      title: 'Smart Control',
      text: 'Digital dashboard and smart suspension ensure total ride precision.',
    },
    {
      icon: 'fa-solid fa-tools',
      title: 'Easy Maintenance',
      text: 'Simple modular design for quick service and part replacement.',
    },
  ];
}
