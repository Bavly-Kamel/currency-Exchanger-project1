import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrenciesList } from '../ui/data.static';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  selectedValue: any;
  ConCurrency: any;
  currencesList = CurrenciesList;
  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<string>('', Validators.required),
    // amountTo1: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo1: new FormControl<any>('', Validators.required),
    // amountTo2: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo2: new FormControl<string>('', Validators.required),
  });
  ngOnInit(): void {
    this.form.controls['currencyTo1'].valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.selectedValue);
    });
    // throw new Error('Method not implemented.');
  }
}
