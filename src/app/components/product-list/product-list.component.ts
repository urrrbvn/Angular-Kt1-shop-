import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public productsService = inject(ProductsService)

  ngOnInit(): void {
      this.productsService.getProducts()
  }
}
