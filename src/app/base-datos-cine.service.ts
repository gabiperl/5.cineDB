import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCineService {

  private urlBase = "https://www.omdbapi.com/?apikey=2c68b107&s=musical&page=1"

  constructor(private http:HttpClient) {}

  getPeliData(){
    return this.http.get(this.urlBase);
  }
}
