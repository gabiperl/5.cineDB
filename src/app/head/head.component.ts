import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  imports: [],
  templateUrl: './head.component.html',
  styles: `
  #logo,#titulo 
  {background-color: rgb(240, 240, 240);}
  
  #titulo>h1 
  {font-size: 72px;}`
  
})
export class HeadComponent {

}
