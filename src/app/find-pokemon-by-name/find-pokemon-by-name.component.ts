import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../Pokemon";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-find-pokemon-by-name',
  templateUrl: './find-pokemon-by-name.component.html',
  styleUrls: ['./find-pokemon-by-name.component.scss']
})
export class FindPokemonByNameComponent implements OnInit {
  pokemonName: string = '';
  foundPokemon: Pokemon = {
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

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findByName()
  }

  findByName() {
    const pokemonName = this.activatedRoute
      .snapshot
      .params
      .pokemonName;

    // metoda pobiera dane o pokemonach z serwera i przypisuje do pola pokemons

    this.httpClient.get<Pokemon>('http://localhost:8080/pokemon/name/' + pokemonName)
      .subscribe(entry => this.foundPokemon = entry);
  }

  updateFindQuery() {
    this.httpClient.get<Pokemon>('http://localhost:8080/pokemon/name/' + this.pokemonName)
      .subscribe(entry => this.foundPokemon = entry);
  }
}
