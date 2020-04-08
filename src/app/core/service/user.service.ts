import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  create(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password,)
      .then(user => {
        this.db.object(`/users/${user.user.uid}`).set({ uid: user.user.uid, email: user.user.email })
        this.router.navigate(['/users/new'])
      })
  }

  update(values): void {
    this.afAuth.auth.currentUser.updateProfile(values)
      .then(() => {
        this.db.object(`/users/${this.afAuth.auth.currentUser.uid}`).update(values)
        this.router.navigate(['/'])
      })
      .catch(error => console.error(error))
  }
}
