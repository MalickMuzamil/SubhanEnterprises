import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-values',
  imports: [CommonModule, MainCard],
  templateUrl: './about-values.html',
  styleUrl: './about-values.css',
})
export class AboutValues {
  values = [
    {
      icon: 'fa-solid fa-gear',
      title: 'Engineering Excellence',
      description:
        'We focus on reliable engineering and mechanical quality in every ATV Quad Bike, ensuring strong performance, durability, and long-term use in Pakistan.',
    },
    {
      icon: 'fa-solid fa-compass',
      title: 'Adventure & Utility',
      description:
        'Our ATV Quad Bikes are designed for off-road adventure, farming, and recreational use, offering control and stability across diverse terrains.',
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Customer Trust & Support',
      description:
        'With over 18 years of experience, we build customer trust through transparent dealing, proper documentation, and dependable after-sales mechanical support.',
    },
  ];
}
