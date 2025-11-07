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
      title: 'Nationwide Delivery',
      text: 'We deliver premium ATVs and spare parts to dealers all across Pakistan with reliability and speed.',
    },
    {
      icon: 'fa-solid fa-warehouse',
      title: 'Bulk Import & Supply',
      text: 'We stock huge quantities of ATVs, ensuring constant availability for large-scale dealership orders.',
    },
    {
      icon: 'fa-solid fa-industry',
      title: 'Authorized Importer',
      text: 'As a registered importer, we provide genuine products directly from global manufacturers at wholesale prices.',
    },
  ];
}
