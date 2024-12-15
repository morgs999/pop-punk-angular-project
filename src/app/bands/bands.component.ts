import { Component } from '@angular/core';
import { Band } from './bands';

@Component({
  selector: 'app-bands',
  imports: [],
  templateUrl: './bands.component.html',
  styleUrl: './bands.component.css'
})
export class BandsComponent {
  bandName = 'Stand Atlantic';
  albumOne = 'Skinny Dipping';
  hideAlbum = false;
  toggle(){
    this.hideAlbum = !this.hideAlbum;
  }
  bands: Band = {
    name: 'Stand Atlantic',
    tracks: 10,
    active: true
  }
}
