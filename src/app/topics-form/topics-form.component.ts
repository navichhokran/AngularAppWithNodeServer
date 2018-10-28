import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent {

  form = new FormGroup({
    name    : new FormControl('',Validators.required),
    contact : new FormGroup({
        email : new FormControl(),
        phone : new FormControl() 
    }),
    topics  : new FormArray([])
  });

  // ****  another way to build a form using FormBuilder class  ****
/*  form;
  constructor(fb : FormBuilder){
    this.form = fb.group({
      name : ['',Validators.required],
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.array([])
    })
  }
  */

  addTopic(topic : HTMLInputElement){
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
  }

  get topics(){
    return this.form.get('topics') as FormArray; 
  }

  removeTopic(topic : FormControl){
    this.topics.removeAt(this.topics.controls.indexOf(topic));
  }
}
