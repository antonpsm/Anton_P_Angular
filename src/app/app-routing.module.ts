import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./core/pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./core/pages/info-page/info-page.module').then((m) => m.InfoPageModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
