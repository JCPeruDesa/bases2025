import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
})
export class DragonballComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegetta', power: 8000},
    { id: 3, name: 'Picolo', power: 3000},
    { id: 4, name: 'Yamcha', power: 500},
  ]);
}
