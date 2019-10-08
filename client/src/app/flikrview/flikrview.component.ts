import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';

@Component({
	selector: 'app-flikrview',
	templateUrl: './flikrview.component.html',
	styleUrls: ['./flikrview.component.css']
})

export class FlikrviewComponent implements OnInit {

	pictures: any[];

	constructor(private flickrService: FlickrService) { }

	/**
	 * Initialize the app, calling the API backed to fetch images
	 */
	ngOnInit() {
		this.getImages('');
	}

	getImages(inputString: string) {
		const searchString = (inputString) ? inputString : '';

		this.flickrService.getImages(searchString).subscribe((result) => {
			if (result.type === 'success') {
				this.pictures = result.data;
			}
		});
	}

	searchForPic(searchString) {
		this.getImages(searchString);
	}
}
