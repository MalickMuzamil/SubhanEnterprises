import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  avgRating = 4.1;
  totalReviews = 123;

  reviews = [
    {
      name: 'ALI FAYYAZ MUNIR',
      rating: 5,
      text: 'Best seller of Quad bikes in Lahore. Fully satisfied. I have recently purchased bike from Subhan enterprises, and I am fully satisfied.',
      date: '4 months ago',
    },
    {
      name: 'Muhammad Ayub',
      rating: 5,
      text: 'Great dealing with owner All good quality atv All good quality atv Really enjoyed with detail conversation Very polite person Highly Recommended',
      date: '3 months ago',
    },
    {
      name: 'Abdur Rafay',
      rating: 5,
      text: 'Highly recommend this service! The expertise and attention to detail were impressive.',
      date: '2 months ago',
    },
    {
      name: 'umer zahid',
      rating: 5,
      text: 'I purchased my atv quad bike from subhan enterprise Very good quality satisfied',
      date: '3 months ago',
    },
    {
      name: 'Shirhabeel Awan',
      rating: 5,
      text: 'I took my ATV from Subhan Enterprises out for its first ride, and it was fantastic! Great power and handling, just as promised!',
      date: '10 months ago',
    },
    {
      name: 'Yousaf Rehman',
      rating: 5,
      text: 'Malik sb, the owner, gives you space and time to discuss, alter any thing you are buying. Very flexible in dealing and try to give best services.',
      date: 'A Year ago',
    },
   
  ];

  fullStars(n: number) {
    return Array(Math.floor(n)).fill(0);
  }
  halfStar(n: number) {
    return n % 1 >= 0.5;
  }
  emptyStars(n: number) {
    return Array(5 - Math.ceil(n)).fill(0);
  }
}
