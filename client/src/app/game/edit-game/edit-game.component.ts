import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  public gameFG: FormGroup;
  public confirmationMessage: string = '';
  public gameConsoles = ["Playstation 3", "Playstation 4", "Playstation 5", "Playstation Vita", "Xbox 360", "Xbox One",
   "Nintendo DS", "Nintendo 3DS", "Nintendo Switch"]

  constructor(private _gameDataService: GameDataService) { }

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

  onSubmit() {

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
