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

	ngOnInit() {
		this.flickrService.getImages().subscribe((result) => {
			if (result.type === 'success') {
				this.pictures = result.data;
			}
		});
	}

	searchForPic(searchString) {
		console.log(`you will search now ... ${searchString}`);
	}

}
