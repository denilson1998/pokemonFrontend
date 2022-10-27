import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/";
  private headers: HttpHeaders | undefined;
  
  constructor(private http: HttpClient) { 

  }
  getPokemons(cantPokemons: any): Observable<any>{
    return this.http.get(this.url + `pokemon?limit=${cantPokemons}`);
  }
  getPokemonData(pokemonName: string): Observable<any>{
    return this.http.get(this.url + `pokemon/${pokemonName}`);
  }
  setHeaders() {
    this.headers = new HttpHeaders()
      .set("Content-Accept", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .set("Content-Type", "application/json")
      .set("Accept", "application/pdf");
  }
}
