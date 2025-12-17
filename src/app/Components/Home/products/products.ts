import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';
import { Modal } from "../../../Shared/modal/modal";

@Component({
  selector: 'app-products',
  imports: [MainCard, CommonModule, Modal],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  modalVisible = false;
  selectedProduct: any = null;

  atvProducts = [
    {
      title: 'ATV X-Rider',
      description: 'Power 750 CC | 4×4 Drive',
      price: 6499,
      image: 'assets/Products/Product-1.png',
      category: 'atv'
    },
    {
      title: 'ATV Stealth',
      description: 'Torque 820 Nm | Off-Road',
      price: 7299,
      image: 'assets/Products/Product-4.png',
      category: 'atv'
    },
    {
      title: 'ATV Trail Beast',
      description: 'Speed 130 km/h | Sport Mode',
      price: 7999,
      image: 'assets/Products/Product-3.png',
      category: 'atv'
    },
    {
      title: 'ATV Pro Edge',
      description: 'Turbo 900 CC | Race Edition',
      price: 8499,
      image: 'assets/Products/Product-1.png',
      category: 'atv'
    }
  ];

  openProductModal(product: any) {
    console.log('Product clicked:', product);
    this.selectedProduct = product;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedProduct = null;
  }
}
