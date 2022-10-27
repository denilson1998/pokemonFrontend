import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//---------------------------------------------
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    NgxPaginationModule,
    //Modules
    SharedModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    //Modules
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
