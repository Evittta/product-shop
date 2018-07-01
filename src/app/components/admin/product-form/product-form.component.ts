import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from './../../../services/product.service';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<Object>;
  productForm: FormGroup;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.1)]],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  save(product): void {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
