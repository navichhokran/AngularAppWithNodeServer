import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private db: AngularFireDatabase, private http: Http, private router: Router) {
  }

  login() {
  //  return this.http.post('/api/authenticate',
  //     JSON.stringify(credentials))
  //     .pipe(
  //       map(response => {
  //         const result = response.json();
  //         if (result && result.token) {
  //           localStorage.setItem('token', result.token);
  //           return true;
  //         }
  //         return false;
  //       })
  //     );
        return this.db.list('/users/');
  }

  logout() {
    if (this.isLoggedIn) {
      localStorage.removeItem('token');
      this.router.navigate(['/signin']);
    }
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return true;
  }
}
