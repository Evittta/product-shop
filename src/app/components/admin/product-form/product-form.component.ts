import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { ProductService } from './../../../services/product.service';
import { CategoryService } from './../../../services/category.service';
import { Product } from './../../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<Object>;
  productForm: FormGroup;
  product: Product[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    /*const id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('id', id);
      this.productService.get(id).subscribe(prod => {
        console.log('prod', prod);
        this.product = prod;
      });
      console.log('product', this.product);
    }*/
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.min(0.1)]
      ],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  save(product): void {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
