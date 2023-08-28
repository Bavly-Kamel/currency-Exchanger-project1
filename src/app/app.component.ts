import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService) {}

  makeApiCall() {
    // Show the spinner before making the API call
    this.spinner.show();

    // Simulate an API call (replace this with your actual API call)
    setTimeout(() => {
      // Hide the spinner after the API call is complete
      this.spinner.hide();
    }, 2000); // Simulating a 2-second API call
  }
}
