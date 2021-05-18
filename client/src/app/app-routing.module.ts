import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'game',
    loadChildren: () => import('./game/game.module').then(mod => mod.GameModule)
  },
  { path: '', redirectTo: 'game/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
