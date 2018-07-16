import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showAlert(alert) {
    var count = 2; // set secconds
    var counter = setInterval(function() {
      alert.style.display = "none"
        //clearInterval(counter) // stop interval
    }, 1000 * count);
  }
}
