import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeachersService } from '../services/teachers.service';
import { FavouriteChangedEventArgs } from '../favourite/favourite.component';
import { Subscription } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {

  teachersInput = 'A custom title case pipe is implemented on this input field.';
  isActive = false;
  teachersBtn = 'Add teacher';
  teachers$ ;
  teachersUpdate: AngularFireList<any>;

  post = {
    title : 'title',
    isFavourite : true
  };

  subscription: Subscription;

  randomText = ` This text is summarized using custom summary pipe.
                          At the end of a week of remembrances for the late Sen.
                          John McCain, Ohio Gov. John Kasich hailed the Arizona maverick for a lifetime
                          of service and called on voters in the upcoming midterm elections to embrace
                          candidates who would unite the country rather than divide it.
                          At the end of a week of remembrances for the late Sen.
                          John McCain, Ohio Gov. John Kasich hailed the Arizona maverick for a lifetime
                          of service and called on voters in the upcoming midterm elections to embrace
                          candidates who would unite the country rather than divide it.`;

  constructor(service: TeachersService) {
    const teachers = service.getTeachers();
    this.teachersUpdate = teachers;
     this.teachers$ = teachers.valueChanges();
  }

  onSave($event, newTeacher: HTMLInputElement) {
    this.isActive = this.isActive ? false : true;
    // stop the bubbling up of event. means if the button is clicked,
    // do not fire the click event for div that contains button and so forth.
    $event.stopPropagation();

    this.teachersUpdate.push({name : newTeacher.value});
    // log the message on console confirming button was clicked. and also log the event object.
    console.log($event  , 'Button was Clicked');
  }

  onDivClicked() {
    console.log('Div was clicked.');
  }

  onEnterPressed() {
    console.log('text -' + this.teachersInput + ' ... Also - Enter was pressed');
  }

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
     console.log('favourite changed' , eventArgs);
  }

}
