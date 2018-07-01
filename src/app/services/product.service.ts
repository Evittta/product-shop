import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) {}

  create(product: Product): Observable<void> {
    const key: string = String(new Date().getTime());
    product.productId = key;
    return from(
      this.afs
        .collection('products')
        .doc(key)
        .set(product)
    );
  }
  getAll(): Observable<Product[]> {
    this.productCollection = this.afs.collection('products');
    return this.productCollection.valueChanges();
  }
  get(productId: string): Observable<Product[]> {
    this.productCollection = this.afs.collection('products', ref =>
      ref.where('productId', '==', productId)
    );
    return this.productCollection.valueChanges();
  }
}
