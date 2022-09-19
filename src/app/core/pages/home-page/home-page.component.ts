import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public noClickOnEnterButton = true;
  public failureMessageFlag = false;
  public allowedMessageFlag = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 public navigate():void {
    if (!this.noClickOnEnterButton) {
      this.allowedMessageFlag = true;
      this.noClickOnEnterButton = true
      setTimeout(() => {
        this.allowedMessageFlag = false;
        this.router.navigate(['/info'])
      },3000);
    } else {
      this.failureMessageFlag = true;
      setTimeout(() => this.failureMessageFlag = false, 3000)
    }
  }

 public changeGuardFlag(): void {
    this.noClickOnEnterButton = false
  }
}
