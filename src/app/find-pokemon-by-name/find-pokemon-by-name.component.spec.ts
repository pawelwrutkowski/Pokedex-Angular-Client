import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPokemonByNameComponent } from './find-pokemon-by-name.component';

describe('FindPokemonByNameComponent', () => {
  let component: FindPokemonByNameComponent;
  let fixture: ComponentFixture<FindPokemonByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPokemonByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPokemonByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
