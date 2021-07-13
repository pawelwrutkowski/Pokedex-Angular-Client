import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pokemon} from "../Pokemon";

var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
//headers_object.append('Accept', 'application/json, text/plain, */*');
//headers_object.append('Authorization', 'Basic ' + btoa('user1:pass1'));
headers_object.append('Authorization', 'Basic dXNlcjE6cGFzczE=');

const httpOptions = {
  headers: headers_object
};

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})

export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient) { }



  ngOnInit(): void {
    this.httpClient.get<Pokemon[]>('http://localhost:8080/pokemon', httpOptions)
      .subscribe(pokemon => this.pokemons = pokemon)
  }

}
