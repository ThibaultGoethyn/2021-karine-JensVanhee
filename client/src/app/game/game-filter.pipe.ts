import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game.model';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(games: Game[], title: string): Game[] {
    if (!title || title.length === 0) {
      return games;
    }
    return games.filter(game => game.title.toLocaleLowerCase().startsWith(title.toLowerCase())
    );
  }
}
