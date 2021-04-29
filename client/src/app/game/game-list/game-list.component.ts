import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent {
  constructor(private _gameDataService: GameDataService) { }

  get games() {
    return this._gameDataService.games;
  }
}
