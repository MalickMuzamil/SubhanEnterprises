import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-hero',
  imports: [],
  templateUrl: './contact-hero.html',
  styleUrl: './contact-hero.css',
})
export class ContactHero {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -20;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
