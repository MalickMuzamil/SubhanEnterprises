import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements AfterViewInit {
  @ViewChild('galleryTrack') trackRef!: ElementRef<HTMLElement>;
  @ViewChild('sliderWrap') wrapRef!: ElementRef<HTMLElement>;

  galleryItems = [
    {
      image: 'assets/Products/Product-1.png',
      title: 'Trail Blazer',
      desc: 'Experience the raw power of adventure',
    },
    {
      image: 'assets/Products/Product-2.png',
      title: 'Off-Road King',
      desc: 'Built for rugged terrain and speed',
    },
    {
      image: 'assets/Products/Product-3.png',
      title: 'Mountain Master',
      desc: 'Precision handling meets raw torque',
    },
    {
      image: 'assets/Products/Product-4.png',
      title: 'Urban Beast',
      desc: 'Power that rules both road and dirt',
    },
    {
      image: 'assets/Products/Trail.png',
      title: 'Trail Rider',
      desc: 'Ride fearless into the wild',
    },
  ];

  ngAfterViewInit() {
    const track = this.trackRef.nativeElement;
    const wrap = this.wrapRef.nativeElement;

    track.innerHTML += track.innerHTML; 

    const imgs = track.querySelectorAll('img');
    let loaded = 0;
    imgs.forEach((img) =>
      img.addEventListener('load', () => {
        if (++loaded === imgs.length) this.startSlider(track, wrap);
      })
    );
  }

   private startSlider(track: HTMLElement, wrap: HTMLElement) {
    let offset = 0;

    // base speed (px per frame) – feel free to tweak
    const BASE_SPEED = 0.9;
    let currentSpeed = BASE_SPEED;
    let targetSpeed  = BASE_SPEED;

    // ease factor for smooth speed change
    const EASE = 0.08;

    const card = track.children[0] as HTMLElement;
    const gap  = 24; // same as CSS gap
    const stepWidth = card.clientWidth + gap;
    const halfWidth = track.scrollWidth / 2;

    // hover/leave handlers
    const slowSpeed = 0.05; // near-stop on hover
    wrap.addEventListener('pointerenter', () => targetSpeed = slowSpeed, { passive: true });
    wrap.addEventListener('pointerleave', () => targetSpeed = BASE_SPEED, { passive: true });

    wrap.addEventListener('touchstart', () => targetSpeed = slowSpeed, { passive: true });
    wrap.addEventListener('touchend',   () => targetSpeed = BASE_SPEED, { passive: true });

    const tick = () => {
      currentSpeed += (targetSpeed - currentSpeed) * EASE;

      offset += currentSpeed;
      if (offset >= stepWidth) {
        track.appendChild(track.firstElementChild!);
        offset -= stepWidth; 
      }

      if (offset >= halfWidth) offset = 0;

      track.style.transform = `translateX(-${offset}px)`;
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
