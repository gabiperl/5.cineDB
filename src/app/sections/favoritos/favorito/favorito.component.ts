import { Component, Input } from '@angular/core';
import { BaseDatosCineService } from '../../../base-datos-cine.service';

@Component({
  selector: 'app-favorito',
  imports: [],
  templateUrl: './favorito.component.html',
  styles: ''
})
export class FavoritoComponent {

  @Input() peli:any;

  constructor(private peliCard:BaseDatosCineService) {}

}
