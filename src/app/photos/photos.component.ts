import { PhotosService } from './../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: any[];

  constructor(private service: PhotosService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(photos => this.photos = photos);
  }

}
