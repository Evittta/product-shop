import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private afs: AngularFirestore) {}

  getCategories(): Observable<Object> {
    return this.afs.collection('categories').valueChanges();
  }
}
