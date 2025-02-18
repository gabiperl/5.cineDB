import { Routes } from '@angular/router';


import { Page404Component } from './sections/page404/page404.component';
import { InicioComponent } from './sections/inicio/inicio.component';
import { FavoritosComponent } from './sections/favoritos/favoritos.component';
import { BuscadorComponent } from './sections/buscador/buscador.component';
import { AgradecimientosComponent } from './sections/agradecimientos/agradecimientos.component';

export const routes: Routes = [

    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: InicioComponent},
    {path: "favs", component: FavoritosComponent},
    {path: "query", component: BuscadorComponent},
    {path: "thank", component: AgradecimientosComponent},
    {path: "**", component: Page404Component},
];
