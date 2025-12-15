import { UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(()=>{
    return `${this.name()} - ${this.age()}`;
  })

  capitalizaName = computed(() => {
    return this.name().toUpperCase();
  })

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
  onChangeAge() {
    this.age.set(60);
  }
  constructor() {}
}
