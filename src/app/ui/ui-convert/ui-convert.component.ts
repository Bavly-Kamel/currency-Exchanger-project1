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
  currencesList = CurrenciesList;

  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<string>('', Validators.required),
    amountTo: new FormControl<number | null>({ value: null, disabled: true }),
    currencyTo: new FormControl<string>('', Validators.required),
  });

  submit() {
    console.log(this.form.value);
  }
}
