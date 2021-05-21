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

  private _games$ = new BehaviorSubject<Game[]>([]);
  private _games: Game[];
 
  constructor(private http: HttpClient) {
    this.games$.subscribe((games: Game[]) => {
      this._games = games;
      this._games$.next(this._games);
    });
  }

  get allGames$(): Observable<Game[]> {
    return this._games$;
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
        this._games= [... this._games, game];
        this._games$.next(this._games);
      });
  }

  deleteGame(gameId: number){
    console.log(gameId);
    return this.http
      .delete(`${environment.apiUrl}/games/${gameId}`)
      .pipe(tap(console.log), catchError(this.handleError))
      .subscribe(() => {
        this._games = this._games.filter(gam => gam.gameId != gameId);
        this._games$.next(this._games);
      })
  }

  getGame$(id: number): Observable<Game> {
    return this.http
      .get(`${environment.apiUrl}/games/${id}`)
      .pipe(tap(console.log), catchError(this.handleError), map(Game.fromJSON));
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
