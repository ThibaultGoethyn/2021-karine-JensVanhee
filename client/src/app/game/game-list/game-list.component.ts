import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDataService } from '../game-data.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent {
  private _fetchGames$: Observable<Game[]> = this._gameDataService.games$;
  public filterGameTitle!: string;
  
  constructor(private _gameDataService: GameDataService) { }

  applyFilter(filter: string){
    this.filterGameTitle = filter;
  }

  get games$(): Observable<Game[]> {
    return this._fetchGames$;
  }
}
