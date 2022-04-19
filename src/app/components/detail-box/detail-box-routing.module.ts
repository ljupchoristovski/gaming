import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBoxComponent } from './detail-box.component';

const routes: Routes = [
  {
    path: '',
    component: DetailBoxComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBoxRoutingModule {}
