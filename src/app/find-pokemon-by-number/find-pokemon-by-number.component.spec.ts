import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPokemonByNumberComponent } from './find-pokemon-by-number.component';

describe('FindPokemonByNumberComponent', () => {
  let component: FindPokemonByNumberComponent;
  let fixture: ComponentFixture<FindPokemonByNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPokemonByNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPokemonByNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
