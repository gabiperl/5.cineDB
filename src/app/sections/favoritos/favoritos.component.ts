import { Component } from '@angular/core';
import { FavoritoComponent } from "./favorito/favorito.component";
import { BaseDatosCineService } from '../../base-datos-cine.service';

@Component({
  selector: 'app-favoritos',
  imports: [FavoritoComponent],
  templateUrl: './favoritos.component.html',
  styles: ``
})
export class FavoritosComponent {

  peli:any[] = [];  
  constructor(private peliCard:BaseDatosCineService) {}


}
