import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxesComponent } from './boxes.component';

@NgModule({
  declarations: [BoxesComponent, BoxComponent],
  imports: [CommonModule, RouterModule, BoxesRoutingModule],
  exports: [BoxesComponent, BoxComponent],
})
export class BoxesModule {}
