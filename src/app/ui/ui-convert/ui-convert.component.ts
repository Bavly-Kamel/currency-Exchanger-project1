import { Component,OnInit } from '@angular/core';
import { CurrenciesList } from '../data.static';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';



@Component({
  selector: 'app-ui-convert',
  templateUrl: './ui-convert.component.html',
  styleUrls: ['./ui-convert.component.scss'],
})

export class UiConvertComponent implements OnInit {
  forms: FormGroup;
  storedcurr: any= {result:0};

   constructor(private currencyService : CurrencyService , private fb: FormBuilder ){
    
    
   
   }
   ngOnInit(): void {
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
    currencyFrom: new FormControl<string>('', Validators.required),
    amountTo: new FormControl<number>({ value: 0, disabled: true }),
    currencyTo: new FormControl<string>('', Validators.required),
  });

  submit() {
    this.currencyService.convertCurrency(this.form.value.amountFrom,this.form.value.currencyFrom,this.form.value.currencyTo).subscribe((res)=>{ this.storedcurr = res})
    
    this.form.patchValue({
      amountTo: this.storedcurr.result
    })
}
}
