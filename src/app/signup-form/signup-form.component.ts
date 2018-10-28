import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import {nameValidators} from '../common/validators/name.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account : new FormGroup({
      username:  new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        nameValidators.cannotContainSpace
      ],
      nameValidators.shouldBeUnique),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', [
        Validators.required,
        nameValidators.passwordMatcher
      ])
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get email() {
    return this.form.get('account.email');
  }

  get password() {
    return this.form.get('account.password');
  }

  get confirmPassword() {
    return this.form.get('account.confirmPassword');
  }

  create(form) {
    console.log(form);
  }
}
