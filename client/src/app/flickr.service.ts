import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


// Configs	
import { API_URL } from './common/URLS.js';

// Interfaces
import { ReturnObject } from '../interfaces/ReturnObject';

// Common Scripts
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class FlickrService {

	constructor(private http: HttpClient) { }
	/**
	 * Executes the process of requests to the backend.
	 *
	 * @param  {string} stringToSearch 	The optional string that represents tags to search for
	 */
	getImages(stringToSearch: string) {
		if (!stringToSearch) {
			try {
				return this.http.get<ReturnObject>(API_URL);
			} catch (error) {
				console.error(`Error in calling GET method: `, error);
			}
		} else {
			try {
				return this.http.post<ReturnObject>(API_URL, { tags: stringToSearch }, this.getHeaderOptions());
			} catch (error) {
				console.error(`Error in doing a POST request: `, error);
			}
		}
	}
	/**
	 * Returns an object representing header options for a post request
	 */
	private getHeaderOptions() {
		return {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
			})
		};
	}
}
