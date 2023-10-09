import { Component } from '@angular/core';
import {caretDown} from '../../../assets/script/slick.js';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  ngOnInit(): void {
    caretDown();
  }
}
