import { Component, OnInit, Output } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GameDataService } from '../game-data.service';
import { Game } from '../game.model';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css']
})
export class DeleteGameComponent implements OnInit {
  public errorMessage: string = '';
  private _fetchGames$: Observable<Game[]>;
  constructor(private _gameDataService: GameDataService) { }

  ngOnInit(): void {
    this._fetchGames$ = this._gameDataService.allGames$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  deleteGame(title: any): boolean {
    console.log(title);
    return false;
  }

  get games$(): Observable<Game[]> {
    return this._fetchGames$;
  }

}
