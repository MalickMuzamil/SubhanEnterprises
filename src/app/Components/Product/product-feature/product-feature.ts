import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';

@Component({
  selector: 'app-product-feature',
  imports: [CommonModule, MainCard],
  templateUrl: './product-feature.html',
  styleUrl: './product-feature.css',
})
export class ProductFeature {
  features = [
    {
      icon: 'fas fa-bolt',
      title: 'High Performance',
      description: 'Experience powerful engines engineered for all terrains.',
    },
    {
      icon: 'fas fa-mountain',
      title: 'All-Terrain Durability',
      description: 'Built to dominate every road — from sand to snow.',
    },
    {
      icon: 'fas fa-tools',
      title: 'Easy Maintenance',
      description: 'Simple upkeep with genuine spare parts availability.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Advanced Safety',
      description: 'Stay protected with reliable braking and control systems.',
    },
  ];
}
