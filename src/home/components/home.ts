import {Component} from 'angular2/core';
import {NewComponentCmp} from '../../new-component/new-component';
// import {CarouselDemo} from '../../elements/carousel/carousel.component';
import {AlertDemo} from '../../elements/alert/alert.component';

@Component({
  // directives: [NewComponentCmp],
  // directives: [NewComponentCmp, CarouselDemo],
  directives: [NewComponentCmp, AlertDemo],

  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeCmp {}
