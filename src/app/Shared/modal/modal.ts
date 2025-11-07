import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
 @Input() isVisible = false;
  @Input() title = '';
 
  @Output() closed: EventEmitter<void> = new EventEmitter();

  closeModal() {
    // hide internal state and notify parent
    this.isVisible = false;
    this.closed.emit();
  }
}
