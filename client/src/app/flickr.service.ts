import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

	constructor(private http: HttpClient) { }

	getImages() {
		return this.http.get('http://localhost:9000/flickr');
	}
}
