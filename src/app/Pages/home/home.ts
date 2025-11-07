import { Component } from '@angular/core';
import { Hero } from "../../Components/Home/hero/hero";
import { Feature } from '../../Components/Home/feature/feature';
import { Products } from '../../Components/Home/products/products';
import { Performance } from "../../Components/Home/performance/performance";
import { Gallery } from "../../Components/Home/gallery/gallery";
import { Testimonials } from "../../Components/Home/testimonials/testimonials";

@Component({
  selector: 'app-home',
  imports: [Hero, Feature, Products, Performance, Gallery, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
