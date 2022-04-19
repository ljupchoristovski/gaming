import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: (): Promise<any> => import('./components/boxes/boxes.module').then((l) => l.BoxesModule),
  },
  {
    path: 'detail/:id',
    loadChildren: (): Promise<any> =>
      import('./components/detail-box/detail-box.module').then((l) => l.DetailBoxModule),
  },
  {
    path: '**',
    redirectTo: '/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
