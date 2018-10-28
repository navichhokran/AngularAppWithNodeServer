import { AuthService } from './../services/auth.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { nameValidators } from '../common/validators/name.validators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private router: Router, private authservice: AuthService, private route: ActivatedRoute) {}
  signInForm = new FormGroup({
      username:  new FormControl('', [
        Validators.required,
      ]),
      password : new FormControl('', Validators.required)
  });

  get username() {
    return this.signInForm.get('username');
  }

  get password() {
    return this.signInForm.get('password');
  }

  login(credentials) {

    // this.authservice.login(credentials)
    // .subscribe(result => {
    //   if (result) {
    //     const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    //     this.router.navigate([ returnUrl || '/']);
    //   } else {
    //     this.signInForm.setErrors({
    //       invalidLogin : true
    //     });
    //   }
    // });
    let result = false;
    this.authservice.login()
    .valueChanges()
    .subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        // tslint:disable-next-line:radix
        if (users[i]['username'] === credentials.username && users[i]['password'] === parseInt(credentials.password)) {
          localStorage.setItem('token', '1234567890');
          result = true;
        }
        if (result) {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([ returnUrl || '/']);
        } else {
           this.setFormErrors();
        }
     }
   });
  }

   setFormErrors() {
    this.signInForm.setErrors({
      invalidLogin : true
    });
  }
}
