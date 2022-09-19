import { Component } from '@angular/core';
import {UserData} from "./interfaces/user-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

public userData: UserData = {
  name: 'a',
  surname: 's',
  isMarried: false,
  age: 2,
  wifeName: 'dddd'
}


}
