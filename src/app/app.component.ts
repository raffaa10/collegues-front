import { Component } from '@angular/core';
import { collegueMock, collegueMock2, collegueMock3 } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  collegueMock = collegueMock;
  collegueMock2 = collegueMock2;
  collegueMock3 = collegueMock3;

  title = 'collegues-front';

}
