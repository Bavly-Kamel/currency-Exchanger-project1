import { Component } from '@angular/core';
import { ICurrency } from '../models/currency.model';
import { CurrencyService } from '../services/currency.service';
import {CurrencyHandlerService} from "../services/currency.handler.service";

@Component({
  selector: 'live-exchange-rates',
  templateUrl: './live-exchange-rates.component.html',
  styleUrls: ['./live-exchange-rates.component.scss'],
})
export class LiveExchangeRatesComponent {
  currencies: ICurrency[] = [];
  portfolioCurrencies: ICurrency[] = [];

  constructor(private currencyService: CurrencyService,
              private handlerService: CurrencyHandlerService) {}

  ngOnInit(): void {
    this.getCurrencies();
    this.handlerService.actionClicked.subscribe( code => {
      this.currencyService.compareCurrency(1, code, this.portfolioCurrencies.map(x => x.code)).subscribe(resp => {
        (resp as any).conversion_rates.forEach( curr => {
           let index = this.portfolioCurrencies.findIndex(x => x.code == curr.currencyCode);
           this.portfolioCurrencies[index].rate = curr.rate;
         });
        console.log(this.portfolioCurrencies);
      })
    })
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
