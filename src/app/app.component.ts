import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

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
  value:any;

  constructor(
    private service: MyserviceService
  ) { }

  ngOnInit(){
    alert(this.service.get())
  }
  count(){
    this.countValue++;  
    if(this.countValue < 5){
    }
  }
  showText(e){
    console.log(this.currentName);
  }
  showTextClick(e){
    this.value = e;
    // console.log(e);
    // alert(e);
  }
}
