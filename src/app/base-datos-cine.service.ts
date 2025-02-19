import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCineService {

  private urlBase = "https://www.omdbapi.com/?apikey=2c68b107&";

  constructor(private http:HttpClient) {}

  getPeliData(title:string){
    return this.http.get(this.urlBase + "s=" + title);
  }
}

