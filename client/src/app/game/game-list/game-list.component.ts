import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, of, merge } from 'rxjs';
import { catchError, filter, scan } from 'rxjs/operators';
import { GameDataService } from '../game-data.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {
  private _fetchGames$: Observable<Game[]>
  public errorMessage: string = '';
  public filterGameTitle: string;
  public filterGame$ = new Subject<string>();
  
  constructor(private _gameDataService: GameDataService) { 
    this.filterGame$.subscribe(val => this.filterGameTitle = val);
  }

  ngOnInit(): void {
    this._fetchGames$ = this._gameDataService.games$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  get games$(): Observable<Game[]> {
    return this._fetchGames$;
  }
}
