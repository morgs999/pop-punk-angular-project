import { Component } from '@angular/core';
import { Band, Album } from './bands';
import { NgIf, DatePipe } from '@angular/common';


@Component({
  selector: 'app-bands',
  imports: [NgIf, DatePipe],
  templateUrl: './bands.component.html',
  styleUrl: './bands.component.css',
  
})


export class BandsComponent {
  bandName = 'Stand Atlantic';
  // albumOne = 'Skinny Dipping';
  hideAlbum = false;
  toggle(){
    this.hideAlbum = !this.hideAlbum;
  }
  bands: Band = {
    name: 'Stand Atlantic',
    tracks: 10,
    active: true
  }
  skinnyDipping: Album = {
    albumName: 'Skinny Dipping',
    releaseDate: new Date('11-Nov-2011 11:11:11'),
    rating: 4,
    cover: 'https://images.squarespace-cdn.com/content/v1/593070a42994cad2710a6439/573ef3bf-9c3f-4f08-9fc7-2a593b9eef3b/zz.jpg?format=2500w',
    recordLabel: 'Hopeless Records',
    LP: true,
    EP: false
  }
}
