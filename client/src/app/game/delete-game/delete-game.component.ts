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
  public confirmationMessage: string = '';
  constructor(private _gameDataService: GameDataService) { }

  ngOnInit(): void {
    this._fetchGames$ = this._gameDataService.games$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  deleteGame(game: any) {
    this._gameDataService.deleteGame(game.value);
    this.confirmationMessage = `Succesfully deleted the game.`
  }

  get games$(): Observable<Game[]> {
    return this._fetchGames$;
  }

}
