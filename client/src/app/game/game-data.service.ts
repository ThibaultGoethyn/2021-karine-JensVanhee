import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe, EMPTY, BehaviorSubject, Subject, merge } from 'rxjs';
import { catchError, map, scan, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {

  private _addedGames$ = new Subject<Game>();
  private _allGames$: Observable<Game[]> = merge(this.games$, this._addedGames$).pipe(tap(console.log),scan((acc: Game[], value: Game) => [...acc, value]));
 
  constructor(private http: HttpClient) {}

  get allGames$(): Observable<Game[]> {
    return this._allGames$;
  }

  get games$() : Observable<Game[]> {
    return this.http.get(`${environment.apiUrl}/games/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map(
        (list: any[]) : Game[] => list.map(Game.fromJSON)));
  }

  addNewGame(game: Game){
    console.log(game);
    return this.http
      .post(`${environment.apiUrl}/games/`, game.toJSON())
      .pipe(tap(console.log),catchError(this.handleError), map(Game.fromJSON))
      .subscribe((game:Game) => {
        this._addedGames$.next(game);
      });
  }

  deleteGame(gameId: number){
    return this.http
      .delete(`${environment.apiUrl}/games/delete/${gameId}`)
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accesing ' ${err.url}'`;
    } else {
      errorMessage = err;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
