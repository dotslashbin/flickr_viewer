import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';

@Component({
	selector: 'app-flikrview',
	templateUrl: './flikrview.component.html',
	styleUrls: ['./flikrview.component.css']
})

export class FlikrviewComponent implements OnInit {

	pictures: any[];
	isLoading: boolean;

	constructor(private flickrService: FlickrService) { this.isLoading = false; }

	/**
	 * Initialize the app, calling the API backed to fetch images
	 */
	ngOnInit() {
		this.isLoading = true;
		this.getImages(''); // Initiall calls get images without any parameters
	}

	
	/**
	 * This is the private method that executes the fetching of images by calling the service methods
	 * @param  {string} inputString 	Input string
	 */
	private getImages(inputString: string) {
		const searchString = (inputString) ? inputString : '';

		this.flickrService.getImages(searchString).subscribe((result) => {
			if (result.type === 'success') {
				this.filterImages(result.data);
			}
		});

		this.isLoading = false;
	}
	
	/**
	 * Initializes an array of image with title and link properties to the "pictures" property.L0
	 * 
	 * @param  {} imageCollection Array of picture data
	 */
	private filterImages(imageCollection) {
		this.pictures = imageCollection.map(pictureData => {
			return {
				title: pictureData.title,
				link: pictureData.media.m,
				description: pictureData.description
			}
		});
	}

	/**
	 * The method that is triggered by the click even from the view. This simply calls to getImages to 
	 * update the contents of the pictures collection.
	 * 
	 * @param  {string} searchString	String to search
	 */
	searchForPic(searchString: string) {
		this.isLoading = true;
		this.getImages(searchString);
	}
}
