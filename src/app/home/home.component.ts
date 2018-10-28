import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title :string = 'Welcome!!';
   cities = [
     {
       name : 'Billing Details',
       country : 'no details.'
     }
   ]

   isSubHeadingExpanded : boolean = false;
   subHeadingBtnValue : string = 'Read More';

   toggleSubHeading(){
     this.isSubHeadingExpanded = !this.isSubHeadingExpanded;
     this.subHeadingBtnValue  = this.isSubHeadingExpanded ? 'Read Less' : 'Read More';
   }

}
