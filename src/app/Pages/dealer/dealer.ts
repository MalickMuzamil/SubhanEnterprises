import { Component } from '@angular/core';
import { MainCard } from '../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dealer',
  imports: [MainCard, CommonModule],
  templateUrl: './dealer.html',
  styleUrl: './dealer.css',
})
export class Dealer {
  dealerCards = [
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'Nationwide ATV Delivery',
      text: 'We provide reliable nationwide delivery of ATV Quad Bikes and spare parts to dealers across Pakistan, ensuring safe handling and timely dispatch.',
    },
    {
      icon: 'fa-solid fa-warehouse',
      title: 'Bulk ATV Import & Supply',
      text: 'We maintain ready stock of ATV Quad Bikes for bulk dealership orders, ensuring uninterrupted supply for retail, rental, and farm use.',
    },
    {
      icon: 'fa-solid fa-industry',
      title: 'Authorized ATV Importer',
      text: 'Subhan Enterprises operates as an authorized ATV importer, sourcing genuine quad bikes from international manufacturers at competitive wholesale rates.',
    },
    {
      icon: 'fa-solid fa-boxes-stacked',
      title: 'Ready Stock Availability',
      text: 'Dealers benefit from ready stock availability of popular ATV models, reducing waiting time and improving order fulfillment.',
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      title: 'Spare Parts Supply',
      text: 'We supply genuine ATV spare parts to dealers, ensuring proper fit, durability, and long-term performance support.',
    },
    {
      icon: 'fa-solid fa-user-gear',
      title: 'After-Sales Technical Support',
      text: 'Our technical team assists dealers with mechanical guidance and support related to ATV engine and gearbox performance.',
    },
    {
      icon: 'fa-solid fa-file-invoice',
      title: 'Proper Documentation & Invoicing',
      text: 'Every dealer order is processed with proper invoicing and documentation for transparent and smooth business operations.',
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Long-Term Dealer Partnership',
      text: 'We focus on building long-term partnerships with ATV dealers through consistent supply, fair pricing, and reliable support.',
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Growing Dealer Network',
      text: 'Subhan Enterprises actively supports an expanding network of ATV dealers across Pakistan with dependable supply and service.',
    },
  ];
}
