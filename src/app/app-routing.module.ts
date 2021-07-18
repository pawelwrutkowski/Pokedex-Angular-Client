import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsComponent} from "./pokemons/pokemons.component";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {FindPokemonByNumberComponent} from "./find-pokemon-by-number/find-pokemon-by-number.component";
import {FindPokemonByNameComponent} from "./find-pokemon-by-name/find-pokemon-by-name.component";
import {FindPokemonComponent} from "./find-pokemon/find-pokemon.component";

const routes: Routes = [
  { path: 'pokemon', component: PokemonsComponent},
  { path: 'pokemon/add', component: AddPokemonComponent},
  { path: 'pokemon/find', component: FindPokemonComponent},
  { path: 'pokemon/number/:pokemonNumber', component: FindPokemonByNumberComponent},
  { path: 'pokemon/name/:pokemonName', component: FindPokemonByNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
