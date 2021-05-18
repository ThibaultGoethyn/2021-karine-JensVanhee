import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MaterialModule} from './../material/material.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameFilterPipe } from './game-filter.pipe';
import { AddGameComponent } from './add-game/add-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'list', component: GameListComponent },
  { path: 'add', component: AddGameComponent }
]

@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    GameFilterPipe,
    AddGameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AddGameComponent, 
    GameListComponent
  ]
})
export class GameModule { }
