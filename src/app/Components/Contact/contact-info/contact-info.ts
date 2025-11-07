import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCard } from '../../../Shared/main-card/main-card';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule, MainCard],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.css',
})
export class ContactInfo {
contactInfo = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Visit Us',
    text: '123 Offroad Avenue, Mountain City'
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Call Us',
    text: '+1 234 567 890'
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email Us',
    text: 'support@atvpower.com'
  }
];
}
