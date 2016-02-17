import {Component} from 'angular2/core';
import {NewComponentCmp} from '../../new-component/new-component';

@Component({
  directives: [NewComponentCmp],
  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeCmp {}
