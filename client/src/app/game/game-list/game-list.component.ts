import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameDataService } from '../game-data.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent {
  private _fetchGames$: Observable<Game[]> = this._gameDataService.games$;
  public filterGameTitle: string;
  public filterGame$ = new Subject<string>();
  
  constructor(private _gameDataService: GameDataService) { 
    this.filterGame$.subscribe(val => this.filterGameTitle = val);
  }

  get games$(): Observable<Game[]> {
    return this._fetchGames$;
  }
}
