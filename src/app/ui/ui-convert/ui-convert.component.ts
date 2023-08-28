import { Component,OnInit } from '@angular/core';
import { CurrenciesList } from '../data.static';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-ui-convert',
  templateUrl: './ui-convert.component.html',
  styleUrls: ['./ui-convert.component.scss'],
})

export class UiConvertComponent implements OnInit {
  forms: FormGroup;
  storedcurr: any= {result:0};

   constructor(private currencyService : CurrencyService , private fb: FormBuilder,private spinner: NgxSpinnerService ){



   }
   ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(res => {console.log(res)});
    this.forms = this.fb.group({
      amount: [1], // Default amount
      fromCurrency: ['USD'], // Default currency
      toCurrency: ['EUR'] , // Default currency
      amountTO: ['']

    });




    this.currencyService.convertCurrency(20,"EGP","USD").subscribe((res)=>{ })



  }


  title = 'currency';
  selectedOptionTo: string = '2';
  selectedOptionFrom: string = '1';
  currencesList = CurrenciesList;

  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<any>('', Validators.required),
    amountTo: new FormControl<number | null>({ value: null, disabled: true }),
    currencyTo: new FormControl<any>('', Validators.required),
  });
  // ConCurrency: any;

  submit() {
    this.spinner.show();
    console.log(this.form);
    this.currencyService.convertCurrency(this.form.value.amountFrom,this.form.value.currencyFrom.code,this.form.value.currencyTo.code).subscribe((res)=>{ this.storedcurr = res ; this.form.patchValue({
      amountTo: this.storedcurr.result
    }) ;
    this.spinner.hide();
  })



}

reset()
{
  console.log(this.amountFrom.value)
    if(this.amountFrom.value==0||this.amountFrom.value==null){
      this.form.patchValue({
        amountTo: null
      })

    }
}
get amountFrom(){
  return this.form.get('amountFrom') as FormControl

}
}
