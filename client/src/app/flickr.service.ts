import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor() { }

  getImages() {
	  console.log(`call them here ...`);
  }
}
