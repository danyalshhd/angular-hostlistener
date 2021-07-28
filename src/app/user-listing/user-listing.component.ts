import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  @Input() userListing?: any;

  constructor() { }

  ngOnInit() {

  }
}
