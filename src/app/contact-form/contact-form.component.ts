import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{


    log(ngModel){
      console.log(ngModel.value);
    }

    submit(data){
      console.log(data.value);
    }

    contactMethods = [
      {id: 1, name : 'email'},
      {id: 2, name : 'phone'}
    ]
}
