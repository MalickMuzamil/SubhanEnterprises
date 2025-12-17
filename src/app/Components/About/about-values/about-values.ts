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
      description: 'Precision, durability, and innovation in every machine we build.'
    },
    {
      icon: 'fa-solid fa-compass',
      title: 'Adventure Spirit',
      description: 'We celebrate the freedom of the open trail and the thrill of exploration.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Customer Trust',
      description: 'Our riders are family their satisfaction drives our journey.'
    }
  ];

}
