import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayDetails = false;
  counter = 0;
  arrButtonClickedCounter = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.counter += 1;
    this.arrButtonClickedCounter.push(this.counter);
  }

}
