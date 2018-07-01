import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afs: AngularFirestore) {}

  save(user: firebase.User) {
    this.afs
      .collection('/users')
      .doc(user.uid)
      .set({
        name: user.displayName,
        email: user.email,
        isAdmin: true
      });
  }
  get(uid: string): Observable<Object> {
    return this.afs
      .collection<User>('users')
      .doc(uid)
      .valueChanges();
  }
}
