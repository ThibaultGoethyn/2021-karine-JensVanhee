import { Injectable } from '@angular/core';
import { GAMES } from './mock-games';
import { Game } from './game.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {
  constructor(private http: HttpClient) {
    this.http
    .get(`/api/Games`)
    .subscribe((val) => console.log(val));
   }

  private _games = GAMES;

  get games(): Game[] {
    return this._games;
  }
}
