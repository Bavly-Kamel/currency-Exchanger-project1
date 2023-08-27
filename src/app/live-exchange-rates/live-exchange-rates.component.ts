import { Component } from '@angular/core';
import { ICurrency } from '../models/currency.model';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'live-exchange-rates',
  templateUrl: './live-exchange-rates.component.html',
  styleUrls: ['./live-exchange-rates.component.scss'],
})
export class LiveExchangeRatesComponent {
  currencies: ICurrency[] = [];
  portfolioCurrencies: ICurrency[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.getMyPortfolio();
    this.currencyService.getCurrencies().subscribe({
      next: (res) => {
        res.forEach((c) => {
          this.portfolioCurrencies.forEach((el) => {
            if (c.code === el.code) {
              c.selected = el.selected;
            }
          });
        });
        this.currencies = res;
      },
    });
  }

  getMyPortfolio() {
    this.portfolioCurrencies = this.currencyService.getPortfolio();
  }

  getSelectedCurrency(c: ICurrency) {
    this.currencyService.updatePortfolio(c);
    this.getMyPortfolio();
  }
}
