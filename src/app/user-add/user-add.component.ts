import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  name = '';
  age = '';
  selectedGender = '';
  userListing = [];
  genders = [
    {name: '', value: ''},
    {name: 'Male', value: 'Male'},
    {name: 'Female', value: 'Female'},
  ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * On user add action
   */
  addUser() {
    this.userListing.push({
      name: this.name,
      age: this.age,
      gender: this.selectedGender,
    });
    this._clearField();
  }

  /**
   * clear the fields
   */
  _clearField() {
    this.name = '';
    this.age = '';
    this.selectedGender = '';
  }
}
