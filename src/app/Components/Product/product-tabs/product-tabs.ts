import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-tabs',
  imports: [],
  standalone: true,
  templateUrl: './product-tabs.html',
  styleUrl: './product-tabs.css',
})
export class ProductTabs {
  activeTab: string = 'atv';

  @Output() tabChange = new EventEmitter<string>();

  selectTab(tab: string) {
    this.activeTab = tab;
    this.tabChange.emit(tab);
  }
}
