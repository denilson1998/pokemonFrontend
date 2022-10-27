import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {path: '', redirectTo:'pokemons' , pathMatch:'full'},
    {path: 'pokemons', component: PokemonsComponent},
    {path: 'pokemonDetails/:pokemonName', component: PokemonComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'pokemons' },
];
/* 
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ]
}) */
export const routing = RouterModule.forRoot(routes);