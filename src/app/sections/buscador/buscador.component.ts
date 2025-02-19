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



  getPelisData(pattern:string)
  {this.peliculas.getPeliData(pattern).subscribe(
    json => {
      let datos:any = json;
      this.pelis = datos.Search;
    }
  );
  }

  getPelis()
  {
    console.log(this.pelis);
    return this.pelis;
  }

}
