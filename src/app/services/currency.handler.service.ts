import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class CurrencyHandlerService {
  actionClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }
  emitActionClicked(code: string){
    this.actionClicked.emit(code);
  }


}
