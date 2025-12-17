import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(private router: Router) { }

  scrollToContact() {
    this.router.navigate(['/contact']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('contact-info');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  }
}
