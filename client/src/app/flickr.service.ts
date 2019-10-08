import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


// Configs	
import { API_URL } from './common/URLS.js';

// Interfaces
import { ReturnObject } from '../interfaces/ReturnObject';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class FlickrService {

	constructor(private http: HttpClient) { }

	getImages(stringToSearch: string) {
		if (!stringToSearch) {
			return this.http.get<ReturnObject>(API_URL);
		} else {
			const httpOptions = {
				headers: new HttpHeaders({
					'Content-Type':  'application/json',
				})
			};

			return this.http.post<ReturnObject>(API_URL, { tags: stringToSearch }, httpOptions);
		}
	}
}
