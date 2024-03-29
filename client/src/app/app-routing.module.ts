import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  { path: 'game',
    canActivate: [AuthGuard],
    loadChildren: () => import('./game/game.module').then(mod => mod.GameModule)
  },
  { path: '', redirectTo: 'game/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes,    
    { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
