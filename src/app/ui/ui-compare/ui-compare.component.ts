import { Component, OnInit } from '@angular/core';
import {CurrenciesList} from '../data.static';
import { FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-ui-compare',
  templateUrl: './ui-compare.component.html',
  styleUrls: ['./ui-compare.component.scss'],
})
export class UiCompareComponent implements OnInit {
  forms: FormGroup;
  targetcurr1: any = {result: 0};
  targetcurr2: any = {result: 0};
  result: any;


  constructor(private currencyService: CurrencyService, private fb: FormBuilder, private spinner: NgxSpinnerService) {


  }

  ngOnInit(): void {
    this.forms = this.fb.group({
      amount: [1], // Default amount
      fromCurrency: ['USD'], // Default currency
      currentTo1: [''],
      currentTo2: ['']

    });


  }

  selectedOptionTo: string = '2';
  selectedOptionFrom: string = '1';
  selectedValue: any;
  ConCurrency: any;
  currencesList = CurrenciesList;
  currencesList2 = CurrenciesList;
  currencesList3 = CurrenciesList;


  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<any>('', Validators.required),
    amountTo1: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo1: new FormControl<any>('', Validators.required),
    amountTo2: new FormControl<number | null>({ value: null, disabled: false }),
    currencyTo2: new FormControl<any>('', Validators.required),
  });

  submit() {

    this.spinner.show();
    this.currencyService.compareCurrency(this.form.value.amountFrom, this.form.value.currencyFrom.code, [this.form.value.currencyTo1.code, this.form.value.currencyTo2.code]).subscribe((res) => {
      this.result = res;


      if (this.result && this.result.conversion_rates) {
        this.targetcurr1 = this.result.conversion_rates[0].amount.toFixed(4);
        this.targetcurr2 = this.result.conversion_rates[1].amount.toFixed(4) ;

        this.form.patchValue({
          amountTo1: this.targetcurr1,
          amountTo2: this.targetcurr2
        });
      }

      this.spinner.hide();
    });
  }




  reset() {

    if (this.amountFrom.value == 0 || this.amountFrom.value == null) {
      this.form.patchValue({
        amountTo1: null,
        amountTo2: null
      })

    }
  }

  get amountFrom() {
    return this.form.get('amountFrom') as FormControl

  }
}


