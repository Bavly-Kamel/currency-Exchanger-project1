import { Component,OnInit } from '@angular/core';
import { CurrenciesList } from '../data.static';
import { FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({ 
  selector: 'app-ui-compare',
  templateUrl: './ui-compare.component.html',
  styleUrls: ['./ui-compare.component.scss'],
})
export class UiCompareComponent implements OnInit {
  forms: FormGroup;
  targetcurr1: any= {result:0};
  targetcurr2: any= {result:0};
  result : any;
  

  constructor(private currencyService : CurrencyService ,  private fb: FormBuilder){
   

  }
  ngOnInit(): void {
    this.forms = this.fb.group({ 
      amount: [1], // Default amount
      fromCurrency: ['USD'], // Default currency
      currentTo1 : [''],
      currentTo2 : ['']
      
    });
    //this.currencyService.compareCurrency(20,"EGP",["EGP","QAR"]).subscribe((res)=>{console.log(res)})

  }
  selectedOptionTo: string = '2';
  selectedOptionFrom: string = '1';
  currencesList = CurrenciesList;
  currencesList2=CurrenciesList;
  currencesList3=CurrenciesList;


  form = new FormGroup({
    amountFrom: new FormControl<number>('' as any, Validators.required),
    currencyFrom: new FormControl<string>('', Validators.required),
    amountTo1: new FormControl<number >({ value: 0, disabled: false }),
    currencyTo1: new FormControl<string>('', Validators.required),
    amountTo2: new FormControl<number>({ value: 0, disabled: false }),
    currencyTo2: new FormControl<string>('', Validators.required),
  });

  submit() {
    console.log(this.form.value)
    this.currencyService.compareCurrency(this.form.value.amountFrom,this.form.value.currencyFrom,[this.form.value.currencyTo1,this.form.value.currencyTo2]).subscribe((res)=>{this.result=res;console.log(res)})
    if(this.result && this.result.conversion_rates){
      this.targetcurr1=this.result.conversion_rates[0].rate
      this.targetcurr2=this.result.conversion_rates[1].rate

      this.form.patchValue({

        amountTo1: this.result.conversion_rates[0].rate,
      amountTo2 : this.result.conversion_rates[1].rate
      })
      
    }
   
    
  console.log(this.form.value);
} }
