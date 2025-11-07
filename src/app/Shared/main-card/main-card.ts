import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-card',
  imports: [CommonModule],
  templateUrl: './main-card.html',
  styleUrl: './main-card.css',
})
export class MainCard {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() progress?: number;
  @Input() image?: string;
  @Input() price?: number;
  @Input() buttonText?: string;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}

