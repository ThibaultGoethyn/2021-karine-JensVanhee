import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public game: FormGroup;
  constructor(private _gameDataService: GameDataService) { }

  ngOnInit(): void {
    this._fetchGames$ = this._gameDataService.allGames$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    this.game = new FormGroup({
      game: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this._gameDataService.deleteGame(this.game.value);
    console.log(this.game.value);
  }

  get games$(): Observable<Game[]> {
    return this._fetchGames$;
  }

}
