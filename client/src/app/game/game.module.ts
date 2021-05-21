import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { MaterialModule} from './../material/material.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameFilterPipe } from './game-filter.pipe';
import { AddGameComponent } from './add-game/add-game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { gameResolver } from './game-resolver';

const routes = [
  { path: 'list', component: GameListComponent },
  { path: 'add', component: AddGameComponent },
  { path: 'delete', component: DeleteGameComponent},
  { path: 'edit/:id',  component: EditGameComponent,
    resolve: {game: gameResolver } 
  },
];

@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    GameFilterPipe,
    AddGameComponent,
    DeleteGameComponent,
    EditGameComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AddGameComponent, 
    GameListComponent,
    DeleteGameComponent
  ]
})
export class GameModule { }
