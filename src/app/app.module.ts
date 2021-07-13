import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PokemonsComponent } from './pokemons/pokemons.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { FindPokemonComponent } from './find-pokemon/find-pokemon.component';
import { FindPokemonByNumberComponent } from './find-pokemon-by-number/find-pokemon-by-number.component';
import { FindPokemonByNameComponent } from './find-pokemon-by-name/find-pokemon-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    AddPokemonComponent,
    FindPokemonComponent,
    FindPokemonByNumberComponent,
    FindPokemonByNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
