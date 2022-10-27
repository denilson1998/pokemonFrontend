import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';

describe('PokemonService', () => {
  let service: PokemonService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });
  //http = TestBed.inject(HttpClient);
  it('should be created PokemonService', () => {
    expect(service).toBeTruthy();
  });
  
});
