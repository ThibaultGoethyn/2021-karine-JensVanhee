import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from '../game.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  @Output() public newGame = new EventEmitter<Game>();
  constructor() { }

  ngOnInit(): void {
  }

  addGame(gameTitle: HTMLInputElement): boolean {
    const game = new Game(gameTitle.value, "eeeeeeeeeeeeeeeeeeeeeeeeeee", "Playstation 3", 20,20,20,20)
    this.newGame.emit(game);
    return false;
  }

}
