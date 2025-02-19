import { Component } from '@angular/core';
import { FavoritoComponent } from "../favoritos/favorito/favorito.component";
import { BaseDatosCineService } from '../../base-datos-cine.service';

@Component({
  selector: 'app-buscador',
  imports: [FavoritoComponent],
  templateUrl: './buscador.component.html',
  styles: ``
})
export class BuscadorComponent {

  private pelis:any[] = [];

  constructor (private peliculas:BaseDatosCineService){}

  getPelis()
  {return this.pelis;}

}
