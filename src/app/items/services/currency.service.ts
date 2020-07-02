import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

url =`https://api.exchangeratesapi.io/latest?base=ILS&symbols=USD`;
  
constructor(private http:HttpClient) { }

  getConversion(){
    return this.http.get(this.url);
  }
}
