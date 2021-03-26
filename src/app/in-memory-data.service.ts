import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1,
        name: 'Mermaid Man',
        elo: 3223,
        description: 'The leader of the International Justice Leage of Super Aquaintances (a subsidiary of viacom).'},
      { id: 2,
        name: 'The Quick-ster',
        elo: 1100,
        description: 'Has the uncanny ability to run really quick!'},
      { id: 3,
        name: 'Captain Magma',
        elo: 2,
        description: 'Get him angry, and he is bound to erupt!'},
      { id: 4,
        name: 'The Elastic Waistband',
        elo: 428,
        description: 'Able to stretch his body into fantastic shapes and forms!'},
      { id: 5,
        name: 'Miss Appear', 
        elo: 888,
        description: 'Now you see her, now you don\'t!'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}