import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  pokemonImageUrl: string;
  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { 
   this.pokemon = {};
   this.pokemonImageUrl = "";
   
  }

  ngOnInit(): void {
    this.getPokemonData();
    
  }
  getPokemonData(): void{
    this.activatedRoute.params.subscribe( params => {
      this.pokemonService.getPokemonData( params['pokemonName']).subscribe(
        {
          next: (res: any) => {
            this.pokemon = res;
            this.pokemonImageUrl = this.pokemon.sprites.front_default;
            //console.log(this.pokemon);
            
          },
          error: (error: any) => {
            console.log(error);
            
          },
        }
      );
      
    });
  }
 
}
