import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpErrorResponse} from '@angular/common/http';
import {map, catchError, filter} from 'rxjs/operators';
import {throwError as observableThrowError , Observable} from 'rxjs';
import { AppError } from '../common/Errors/app-error';
import { NotFoundError } from '../common/Errors/not-found-error';
import { BadRequestError } from '../common/Errors/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
        );
  }

  get(id) {
    return this.http.get(this.url + '/' + id)
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
        );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
     .pipe(
         map(response => response.json()),
         catchError(this.handleError)
         );
  }

  update(resource) {
    return  this.http.patch(this.url + '/' + resource.id, {isRead : true})
    .pipe(
        map(response => response.json()),
        catchError(this.handleError)
        );
  }

  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id)
     .pipe(
        map(response => response.json()),
        catchError(this.handleError)
        );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return observableThrowError(new BadRequestError(error.json()));
    } else if (error.status === 404) {
      return observableThrowError(new NotFoundError());
     } else {
      return observableThrowError(new AppError(error.json()));
     }
  }
}


