import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../Pokemon";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent {
  pokemons: Pokemon[] = [];

  // nowy pokemon tworzony za pomocą formularza
  newPokemon: Pokemon = {
    number: 0,
    name: '',
    body: '',
    primaryType: '',
    secondaryType: '',
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
    description: ''
  };

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }

  // metoda pobiera dane o pokemonach z serwera i przypisuje do pola pokemons
  loadData(): void {
    this.httpClient.get<Pokemon[]>('http://localhost:8080/pokemon')
      .subscribe(entry => this.pokemons = entry);
  }

  createPokemon() {
    this.httpClient.post('http://localhost:8080/pokemon', this.newPokemon)
      .subscribe(() => this.loadData());
  }

}
