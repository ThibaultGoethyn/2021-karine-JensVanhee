import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from '../game.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  @Output() public newGame = new EventEmitter<Game>();
  gameFG: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.gameFG = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl(''),
      gameConsole: new FormControl('', [Validators.required]),
      newPrice: new FormControl('', [Validators.required, Validators.pattern("^[0-9.,]*$")]),
      usedPrice: new FormControl('', [Validators.pattern("^[0-9.,]*$")]),
      newStock: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      usedStock: new FormControl('',[Validators.pattern("^[0-9]*$")] )
    });
  }

  submitGame() {
    const game = new Game(this.gameFG.value.title, this.gameFG.value.description, this.gameFG.value.gameConsole, 
      this.gameFG.value.newPrice, this.gameFG.value.usedPrice, this.gameFG.value.newStock, this.gameFG.value.usedStock)
    this.newGame.emit(game);
    return false;
  }

  getErrorMessage(errors:any): string {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs to be at least ${errors.minlength.requiredLength} characters`; 
    } else if (errors.pattern) {
      return `only numbers are allowed`;
    }
    else return '';
  }
}
