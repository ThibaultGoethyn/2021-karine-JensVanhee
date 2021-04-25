import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  title: string;
  description: string;
  console: string;
  newPrice: number;

  constructor() {
    this.title = 'gameTitle';
    this.description = 'gameDescription';
    this.console = 'gameConsole';
    this.newPrice = 9.99;
   }

  ngOnInit(): void {
  }

}
