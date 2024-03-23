import { Component, Input } from '@angular/core';
import { ProductRatingComponent } from '../product-rating/product-rating.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ProductRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() public title:string
  @Input() public category:string
  @Input() public price:number
  @Input() public rating:number
  @Input() public image:string
  
} 
