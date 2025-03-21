import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10;

  counterSignal = signal(10);

  increasyBy(value: number){
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  inicializa(){
    this.counter = 0;
    this.counterSignal.set(0)
  }
}
