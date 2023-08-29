import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(public http : HttpClient) {
    
   }

   convertCurrency(amount : number ,  From : string , TO : string ){
     return this.http.get(  ` http://51.20.2.168/api/v1/conversion?from=${From}&to=${TO}&amount=${amount}` )
   }
  compareCurrency(amount : number , From : string , TO : string []){
    return this.http.get(   `http://51.20.2.168/api/v1/comparison?from=${From}&amount=${amount}&list=${TO}`)
   }
   getCurrencies(){
    return this.http.get( `http://13.51.146.2/api/v1`)
   }
}
