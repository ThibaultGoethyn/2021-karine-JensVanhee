import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe, EMPTY } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {
  constructor(private http: HttpClient) {}

  get games$() : Observable<Game[]> {
    return this.http.get(`${environment.apiUrl}/Game/`).pipe(
      tap(console.log),
      catchError(this.handleError),
      map(
        (list: any[]) : Game[] => list.map(Game.fromJSON)));
  }

  addNewGame(game: Game): Observable<Game>{
    return this.http
      .post(`${environment.apiUrl}/game/`, game.toJSON())
      .pipe(tap(console.log),catchError(this.handleError), map(Game.fromJSON));
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
