import { Component, inject} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})
export class FormDataComponent {
  public productsService = inject(ProductsService)
}
