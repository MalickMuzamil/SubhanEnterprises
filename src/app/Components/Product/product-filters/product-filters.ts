import { Component, AfterViewInit } from '@angular/core';
import { Dropdown } from '../../../Shared/dropdown/dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filters',
  imports: [Dropdown, CommonModule],
  templateUrl: './product-filters.html',
  styleUrl: './product-filters.css',
})
export class ProductFilters implements AfterViewInit {
  ngAfterViewInit(): void {
    const minRange = document.getElementById('min-range') as HTMLInputElement;
    const maxRange = document.getElementById('max-range') as HTMLInputElement;
    const minVal = document.getElementById('min-val')!;
    const maxVal = document.getElementById('max-val')!;

    const minGap = 1000;

    const syncSlider = () => {
      let min = parseInt(minRange.value);
      let max = parseInt(maxRange.value);

      if (max - min <= minGap) {
        if (event?.target === minRange) min = max - minGap;
        else max = min + minGap;
      }

      minRange.value = String(min);
      maxRange.value = String(max);

      minVal.textContent = min.toLocaleString();
      maxVal.textContent = max.toLocaleString();
    };

    minRange.addEventListener('input', syncSlider);
    maxRange.addEventListener('input', syncSlider);
  }
}
