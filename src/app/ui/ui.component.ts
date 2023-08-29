import { Component, ViewChild } from '@angular/core';
import { LiveExchangeRatesComponent } from '../live-exchange-rates/live-exchange-rates.component';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent {
  @ViewChild('exchangeRates') exchangeRates: LiveExchangeRatesComponent;
  activeTab: 'convert' | 'compare' = 'convert';

  constructor(private currencyService: CurrencyService) { }

  checkForChanges(rates) {
    const oldPortfolio = this.currencyService.getPortfolio();
    oldPortfolio.forEach(el => {
      rates.forEach(r => {
        if (el.code === r.currencyCode) {
          el.rate = r.rate;
        }
      })
    });
    this.currencyService.setNewPortfolio(oldPortfolio);
    this.exchangeRates.getMyPortfolio();
  }
}
