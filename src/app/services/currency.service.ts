import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrency } from '../models/currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'http://www.amrcurrencyconversion.site';

  constructor(private http: HttpClient) {}

  getPortfolio() {
    let myPortfolio = localStorage.getItem('myPortfolio')
      ? JSON.parse(localStorage.getItem('myPortfolio') || '')
      : [];
    return myPortfolio;
  }

  updatePortfolio(currency: ICurrency) {
    let myPortfolio = this.getPortfolio();
    if (currency.selected) {
      myPortfolio.push(currency);
    } else {
      myPortfolio = myPortfolio.filter(
        (c: ICurrency) => c.code != currency.code
      );
    }
    localStorage.setItem('myPortfolio', JSON.stringify(myPortfolio));
  }

  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get(`${this.baseURL}/api/v1`).pipe(
      map((res: any) => {
        if (res) {
          return res.currencies as ICurrency[];
        } else {
          throw new Error('Failed to retrieve currencies!');
        }
      })
    );
  }

   convertCurrency(amount : number ,  From : string , TO : string ){
     return this.http.get(  ` http://13.51.146.2/api/v1/conversion?from=${From}&to=${TO}&amount=${amount}` )
   }
  compareCurrency(amount : number , From : string , TO : string []){
    return this.http.get(   `http://13.51.146.2/api/v1/comparison?from=${From}&amount=${amount}&list=${TO}`)
   }
}
