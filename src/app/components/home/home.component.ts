import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
        transition(':enter', [style({ transform: 'translateX(100%)' }), animate('1s ease-in-out')]),
        transition(':leave', [animate('1s ease-in-out', style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  words: string[] = ['Developer.', 'Professional Coder.', 'Another Developer.'];
  activeWord: string = this.words[0];

  ngOnInit() {
      this.startWordTransition();
  }

  startWordTransition() {
      let index = 0;
      setInterval(() => {
          index = (index + 1) % this.words.length;
          this.activeWord = this.words[index];
      }, 2000); // Cambia el valor 2000 a la duración deseada en milisegundos
  }
}
