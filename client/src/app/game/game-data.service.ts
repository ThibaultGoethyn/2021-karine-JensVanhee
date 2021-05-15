import { Injectable } from '@angular/core';
import { GAMES } from './mock-games';
import { Game } from './game.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {
  constructor(private http: HttpClient) {}

  private _games = GAMES;

  get games$() : Observable<Game[]> {
    return this.http.get(`${environment.apiUrl}/Game/`).pipe(
      tap(console.log),
      map(
        (list: any[]) : Game[] => list.map(Game.fromJSON)));
  }
}
