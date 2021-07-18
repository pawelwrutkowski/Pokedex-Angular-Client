import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-pokemon',
  templateUrl: './find-pokemon.component.html',
  styleUrls: ['./find-pokemon.component.scss']
})
export class FindPokemonComponent implements OnInit {
  byNumber: number = 0;
  byName: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  findByNumber() {
    this.router.navigate(['/pokemon/number/' + this.byNumber]);
  }

  findByName() {
    this.router.navigate(['/pokemon/name/' + this.byName]);
  }
}
