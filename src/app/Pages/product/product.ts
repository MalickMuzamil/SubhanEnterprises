import { Component } from '@angular/core';
import { ProductHero } from '../../Components/Product/product-hero/product-hero';
import { ProductGrid } from "../../Components/Product/product-grid/product-grid";
import { ProductFeature } from "../../Components/Product/product-feature/product-feature";
import { ProductSpecs } from "../../Components/Product/product-specs/product-specs";
import { ProductCta } from "../../Components/Product/product-cta/product-cta"; 

@Component({
  selector: 'app-product',
  imports: [ProductHero, ProductGrid, ProductFeature, ProductSpecs, ProductCta],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

}