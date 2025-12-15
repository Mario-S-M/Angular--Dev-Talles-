import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage=(): Character[]=>{

    const character = localStorage.getItem("characters")
    return character ? JSON.parse(character):[];
}


@Injectable({ providedIn: 'root' })
export class DragonBallService {
  constructor() {}
  characters = signal<Character[]>(loadFromLocalStorage()); 

  saveToLocalStorage = effect(()=>{
    localStorage.setItem("characters", JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
