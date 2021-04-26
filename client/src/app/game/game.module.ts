import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MaterialModule} from './../material/material.module';
import { GameListComponent } from './game-list/game-list.component';


@NgModule({
  declarations: [
    GameComponent,
    GameListComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
