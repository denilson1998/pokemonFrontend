import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: Array<any>;
  pageNumber: number;
  totalOfPokemons: number;
  
  constructor(private pokemonService: PokemonService, private router: Router) { 
    this.pokemons = [];
    this.pageNumber = 1;
    this.totalOfPokemons = 100;
  }

  ngOnInit(): void {
    this.getPokemons();
    
  }
  getPokemons(): void {
    //console.log(this.totalOfPokemons);
    
    this.pokemonService.getPokemons(+this.totalOfPokemons).subscribe(
      {
        next: (res: any) => {
          this.totalOfPokemons = res.results.length;
          console.log(this.totalOfPokemons);
          
          
          res.results.forEach((result: { name: string; })  => {
            this.pokemonService.getPokemonData(result.name).subscribe(
              {
                
                next: (res: any) => {
                  this.pokemons.push(res);
                  //console.log(this.pokemons);
                },
                error(error: any) {
                  console.log(error);
                  
                },
              }
            );
            this.pokemons = [];
          });
          
        },
        error: (error: any) => {
          console.log(error);
          
        }
      }
    );
  }
  detailsPokemon(pokemonName: string){
      console.log(pokemonName);
      this.router.navigate(['/pokemonDetails', pokemonName]);
  }
  
}
