import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicetteEditComponent } from './ricette-edit.component';
import { RicetteEditRoutingModule } from './ricette-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RicetteEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RicetteEditComponent
  ]
})
export class RicetteEditModule { }
