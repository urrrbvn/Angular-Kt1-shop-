import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  standalone: true,
  imports: [],
  templateUrl: './product-rating.component.html',
  styleUrl: './product-rating.component.css'
})
export class ProductRatingComponent {
  @Input() public rating:number

  public computedStars():number{
    return Math.floor(this.rating)
  }
  public starTemplate = [1,2,3,4,5]
}
