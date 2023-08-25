import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrency } from '../models/currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get('http://www.athe.store/api/v1').pipe(
      map((res: any) => {
        if (res) {
          return Object.values(res.currencies).filter((v) => v) as ICurrency[];
        } else {
          throw new Error('Failed to retrieve currencies!');
        }
      })
    );
  }
}
