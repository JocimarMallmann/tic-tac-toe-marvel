import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'game'
  },
  {
    path: 'game',
    component: TicTacToeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
