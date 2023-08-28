import { Component, OnInit } from '@angular/core';
import { CurrenciesList } from '../data.static';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-compare',
  templateUrl: './ui-compare.component.html',
  styleUrls: ['./ui-compare.component.scss'],
})
export class UiCompareComponent {
  selectedOptionTo: string = '2';
  selectedOptionFrom: string = '1';
  selectedValue: any;
  ConCurrency: any;
  currencesList = CurrenciesList;

  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<any>('', Validators.required),
    // amountTo1: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo1: new FormControl<any>('', Validators.required),
    // amountTo2: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo2: new FormControl<any>('', Validators.required),
  });

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
  ngOnInit(): void {
    this.form.controls['currencyTo1'].valueChanges.subscribe((value) => {
      // console.log(value);
      // console.log(this.selectedValue);
    });
  }
}
