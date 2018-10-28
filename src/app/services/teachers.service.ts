import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
  })

export class TeachersService {

    constructor(private db: AngularFireDatabase) {}
    getTeachers() {
      return this.db.list('/teachers');
    }
}
