import { Component } from '@angular/core';
import { CurrenciesList } from '../data.static';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-convert',
  templateUrl: './ui-convert.component.html',
  styleUrls: ['./ui-convert.component.scss'],
})
export class UiConvertComponent {
  title = 'currency';
  selectedOptionTo: string = '2';
  selectedOptionFrom: string = '1';
  selectedValue: any;
  ConCurrency: any;
  currencesList = CurrenciesList;

  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<any>('', Validators.required),
    amountTo: new FormControl<number | null>({ value: null, disabled: true }),
    currencyTo: new FormControl<any>('', Validators.required),
  });
  // ConCurrency: any;

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
