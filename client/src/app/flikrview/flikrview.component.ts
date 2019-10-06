import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flikrview',
  templateUrl: './flikrview.component.html',
  styleUrls: ['./flikrview.component.css']
})
export class FlikrviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  console.log(`you are here...`)
  }

}
