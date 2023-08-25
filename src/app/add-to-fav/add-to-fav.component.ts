import { Component, Input } from '@angular/core';
import { ICurrency } from '../models/currency.model';

@Component({
  selector: 'add-to-fav-btn',
  templateUrl: './add-to-fav.component.html',
  styleUrls: ['./add-to-fav.component.scss'],
})
export class AddToFavComponent {
  @Input() currencies: ICurrency[] = [];

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
