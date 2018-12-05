import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RicetteListComponent } from './ricette-list.component';
import { RicetteListRoutingModule } from './ricette-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RicetteListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RicetteListComponent
  ]
})
export class RicetteListModule { }
