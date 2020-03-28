import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  name ="Lalit";

  get(){
    return this.name;
  }
}
