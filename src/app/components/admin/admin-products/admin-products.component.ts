import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from './../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }
}
