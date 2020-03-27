import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Vedika karma';
  names = [
    "Pankaj",
    "Lalit",
    "Pankaj",
    "Lalit"
  ];
  show = 5;
  show1 = 5;
  countValue= 0;
  currentName:any;
  
  count(){
    this.countValue++;  
    // this.currentName = this.
    if(this.countValue < 5){
    }
  }
}
