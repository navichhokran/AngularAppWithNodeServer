import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map, catchError, filter} from 'rxjs/operators';
import {throwError as observableThrowError , Observable} from 'rxjs';
import { AppError } from '../common/Errors/app-error';
import { NotFoundError } from '../common/Errors/not-found-error';
import { BadRequestError } from '../common/Errors/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('/photos')
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
