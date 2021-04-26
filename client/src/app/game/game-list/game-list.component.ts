import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private _games = GAMES;
  constructor() { }

  get games() {
    return this._games;
  }
  ngOnInit(): void {
  }

}
