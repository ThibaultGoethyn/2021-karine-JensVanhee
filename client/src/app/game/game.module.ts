import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MaterialModule} from './../material/material.module';
import { GameListComponent } from './game-list/game-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GameFilterPipe } from './game-filter.pipe';


@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    GameFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    MaterialModule
  ],
  exports: [
    GameListComponent
  ]
})
export class GameModule { }
