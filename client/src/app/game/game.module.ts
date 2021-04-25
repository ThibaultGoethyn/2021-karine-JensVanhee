import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MaterialModule} from './../material/material.module';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule, 
    MaterialModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
