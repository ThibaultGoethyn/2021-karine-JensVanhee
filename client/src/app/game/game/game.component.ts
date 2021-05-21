import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() public game: Game;

  constructor( 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
  }

  editGame(){
    const gameId = this.game ? this.game.gameId : null;
    this.router.navigate([`/game/edit/${gameId}`]);
  }
}
