import { Component } from '@angular/core';
import { MainCard } from '../../../Shared/main-card/main-card';
import { CommonModule } from '@angular/common';
import { ProductFilters } from '../product-filters/product-filters';
import { ProductTabs } from '../product-tabs/product-tabs';
import { Modal } from '../../../Shared/modal/modal';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductTabs, ProductFilters, MainCard, Modal],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
  activeTab: string = 'atv';
  filters: any = {};
  products = [
    {
      image: 'assets/Products/Product-1.png',
      title: 'ATV X-Trail',
      category: 'atv',
      description: 'High-performance 4x4 ATV built for trail riding and recreational off-road use.',
      price: 8999
    },
    {
      image: 'assets/Products/Product-1.png',
      title: 'ATV X-Trail',
      category: 'atv',
      description: 'High-performance 4x4 ATV built for trail riding and recreational off-road use.',
      price: 8999
    },
    {
      image: 'assets/Products/Product-1.png',
      title: 'ATV X-Trail',
      category: 'atv',
      description: 'High-performance 4x4 ATV built for trail riding and recreational off-road use.',
      price: 8999
    },
    {
      image: 'assets/Products/Product-1.png',
      title: 'ATV X-Trail',
      category: 'atv',
      description: 'High-performance 4x4 ATV built for trail riding and recreational off-road use.',
      price: 8999
    },
    {
      image: 'assets/Products/Product-2.png',
      title: 'ATV Pro Rider',
      category: 'atv',
      description: 'Professional-grade ATV offering enhanced power and suspension for tough terrain.',
      price: 12999
    },
    {
      image: 'assets/Products/Product-2.png',
      title: 'Off-Road Tire',
      category: 'spare',
      description: 'Durable off-road tire with deep treads for superior traction on mud and rocks.',
      price: 199
    },
    {
      image: 'assets/Products/Product-2.png',
      title: 'Shock Absorber',
      category: 'spare',
      description: 'Heavy-duty shock absorber to improve ride comfort and handling on rough terrain.',
      price: 149
    },
    {
      image: 'assets/Products/Product-2.png',
      title: 'Protective Gear Set',
      category: 'gear',
      description: 'Protective riding gear designed for safety and durability during off-road use.',
      price: 249
    },
  ];

  filteredProducts = [...this.products];

  // modal state for showing selected product
  selectedProduct: any = null;
  modalVisible: boolean = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
    this.applyFilters();
  }

  onFiltersChange(filters: any) {
    this.filters = filters;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(
      (p) => p.category === this.activeTab
    );
  }

  openProductModal(product: any) {
    this.selectedProduct = product;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedProduct = null;
  }
}

