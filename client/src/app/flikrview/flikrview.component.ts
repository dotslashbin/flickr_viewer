import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-flikrview',
  templateUrl: './flikrview.component.html',
  styleUrls: ['./flikrview.component.css']
})
export class FlikrviewComponent implements OnInit {

  	constructor(private flickrService: FlickrService) { }

  	ngOnInit() {
		this.flickrService.getImages().subscribe((images) => {
			console.log('you are here...')
			console.log(images);
		})
	}

}
