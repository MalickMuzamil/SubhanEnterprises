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
      text: 'Shop #36, LOS Road, New Islamia Park, Lahore'
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Call Us',
      text: '+92 332 4350140'
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email Us',
      text: 'naeeem.majeed101@gmail.com'
    }
  ];
}
