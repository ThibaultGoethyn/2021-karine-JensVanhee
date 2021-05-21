import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Game } from './game.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDataService } from './game-data.service'
  
  @Injectable({
    providedIn: 'root'
  })
  export class gameResolver implements Resolve<Game> {
    constructor(private gameDataService: GameDataService) {}
    
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> {
    return this.gameDataService.getGame$(route.params['id']);
  }
} 