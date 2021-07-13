import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../Pokemon";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-find-pokemon-by-number',
  templateUrl: './find-pokemon-by-number.component.html',
  styleUrls: ['./find-pokemon-by-number.component.scss']
})
export class FindPokemonByNumberComponent implements OnInit {
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
    const pokemonNumber = this.activatedRoute
      .snapshot
      .params
      .pokemonNumber;

    // metoda pobiera dane o pokemonach z serwera i przypisuje do pola pokemons

    this.httpClient.get<Pokemon>('http://localhost:8080/pokemon/number/' + pokemonNumber)
      .subscribe(entry => this.foundPokemon = entry);
  }

}
