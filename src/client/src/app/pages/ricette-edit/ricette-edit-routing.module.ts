import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RicetteEditComponent } from './ricette-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RicetteEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RicetteEditRoutingModule { }
