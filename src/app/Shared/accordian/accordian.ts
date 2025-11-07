import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  imports: [CommonModule],
  templateUrl: './accordian.html',
  styleUrl: './accordian.css',
})
export class Accordian {
@Input() faqs: { question: string; answer: string }[] = [];
  activeIndex: number | null = null;

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
