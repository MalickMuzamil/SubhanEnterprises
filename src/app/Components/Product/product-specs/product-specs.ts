import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-specs',
  imports: [CommonModule],
  templateUrl: './product-specs.html',
  styleUrl: './product-specs.css',
})
export class ProductSpecs {
specs = [
  { label: 'Engine Type', value: '4-Stroke Liquid-Cooled' },
  { label: 'Displacement', value: '450cc' },
  { label: 'Horsepower', value: '39 HP' },
  { label: 'Transmission', value: '5-Speed Manual' },
  { label: 'Top Speed', value: '120 km/h' },
  { label: 'Fuel Capacity', value: '12.5 Liters' },
  { label: 'Ground Clearance', value: '270 mm' },
  { label: 'Tire Size', value: 'Front: 24x8-12 / Rear: 24x10-12' },
  { label: 'Weight', value: '345 kg' },
];
}
