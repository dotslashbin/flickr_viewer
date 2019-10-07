import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Configs 
import { API_URL } from './common/URLS.js';

// Interfaces
import { ReturnObject } from '../interfaces/ReturnObject'

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

	constructor(private http: HttpClient) { }

	getImages() {
		return this.http.get<ReturnObject>(API_URL);
	}
}
