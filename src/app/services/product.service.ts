import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private afs: AngularFirestore) {}

  create(product): Observable<void> {
    const key = String(new Date().getTime());
    return from(
      this.afs
        .collection('products')
        .doc(key)
        .set(product)
    );
  }
  getAll() {
    return this.afs.collection('products');
  }
}
