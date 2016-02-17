import {Component} from 'angular2/core';

@Component({
  selector:'new-component',
  templateUrl:'./new-component/new-component.html'
})

export class NewComponentCmp {
  name : string;
  employees : string[];
  judge : Boolean;
  constructor() {
    this.name = 'Weiliang';
    this.employees = ['william', 'will'];
    this.judge = true;
  }
  logOut(value) {
    console.log(value);
  }
  onKeyup() {
    console.log('key up');
  }
  toggle() {
    this.judge = !this.judge;
  }
}
