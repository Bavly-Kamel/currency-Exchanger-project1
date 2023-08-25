import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CurrencyService } from '../services/currency.service';
import { ICurrency } from '../models/currency.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('buttonClick', [
      state('clicked', style({ transform: 'scale(1.1)' })),
      transition('void => clicked', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FooterComponent implements OnInit {
  buttonState: string; // Add buttonState property for animation

  // Define your list of currencies
  currencies: ICurrency[] = [];

  constructor(
    private router: Router,
    private currencyService: CurrencyService
  ) {
    this.buttonState = 'normal'; // Initialize buttonState
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe({
      next: (res) => {
        this.currencies = res;
      },
    });
  }

  // Function to handle the button click
  handleButtonClick() {
    console.log(this.currencies);
    this.buttonState = 'clicked'; // Trigger button animation
    setTimeout(() => {
      this.router.navigate(['None']); // Navigate to "None" after a delay for animations
    }, 300); // Adjust the delay time as needed (300ms for example)
  }
}
