import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [ UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed( () => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed( () => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('IronMan');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

}
