import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailBoxRoutingModule } from './detail-box-routing.module';
import { DetailBoxComponent } from './detail-box.component';

@NgModule({
  declarations: [DetailBoxComponent],
  imports: [CommonModule, RouterModule, DetailBoxRoutingModule],
  exports: [DetailBoxComponent],
})
export class DetailBoxModule {}
