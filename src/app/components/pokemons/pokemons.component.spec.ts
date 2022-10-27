import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule, By } from "@angular/platform-browser";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { routing } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonsComponent } from './pokemons.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';

describe(`(1) Test of Component:'PokemonsComponent'`, () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;
  let http: HttpTestingController;
  let httpClient: HttpClient;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonsComponent,
        BrowserModule,
        HttpClientModule,
        NgxPaginationModule,
        HttpClientTestingModule,
        HttpTestingController,
        RouterTestingModule,
        //Modules
        SharedModule
      ],
      declarations: [
        PokemonsComponent
      ],
      
    })
    .compileComponents();
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PokemonComponent', () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy();
  });
  /* it('should exists Pokemons Array', () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const app = fixture.componentInstance
    expect(app.pokemons).toBeTruthy();
  }); */
  /*  pokemons: Array<any>;
  pokemonSelected: any;
  pageNumber: number;
  totalOfPokemons: number;
 */
  /* it('should exits Page Number', () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const app = fixture.componentInstance
    expect(app.pageNumber).toBeTruthy();
  });
  it('should exits Total Of Pokemons', () => {
    const fixture = TestBed.createComponent(PokemonsComponent);
    const app = fixture.componentInstance
    expect(app.totalOfPokemons).toBeTruthy();
  }); */
  /* it('should change items per page on change', () => {
    const comp = new PaginationComponent();
    const event10 = { target: { value: 10}};
    const event20 = { target: { value: 20}};
    expect(comp.config.itemsPerPage)
      .withContext('first 5')
      .toBe(5);
    comp.setItemsPerPage(event10);
    expect(comp.config.itemsPerPage)
      .withContext('on change 10')
      .toBe(10);
    comp.setItemsPerPage(event20);
    expect(comp.config.itemsPerPage)
      .withContext('on change 10')
      .toBe(20);
  });

  it('should change page on click', () => {
    const comp = new PaginationComponent();
    expect(comp.config.currentPage)
      .withContext('first 1')
      .toBe(1);
    comp.pageChanged(2);
    expect(comp.config.currentPage)
      .withContext('next page o click')
      .toBe(2);
  }); */

});
