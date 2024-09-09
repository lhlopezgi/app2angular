import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {
  urlApi = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  obtenerListadoPokemones(){
    return this.http.get(this.urlApi)
  }

  obtenerUnPokemon(url: string ){
    return this.http.get(url);
  }

  nextPage(nextPageUrl: string){
    return this.http.get(nextPageUrl);
  }
  prevPage(prevPageUrl: string){
    return this.http.get(prevPageUrl);
  }
}
