import { Component } from '@angular/core';
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
  currencesList = CurrenciesList;

  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<string>('', Validators.required),
    amountTo1: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo1: new FormControl<string>('', Validators.required),
    amountTo2: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo2: new FormControl<string>('', Validators.required),
  });

  submit() {
    console.log(this.form.value);
  }
}
