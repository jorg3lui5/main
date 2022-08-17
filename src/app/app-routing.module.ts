import { NgModule } from '@angular/core';
import {
  Routes,
  ExtraOptions,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/auth/login/login.module').then(
            (m) => m.AuthLoginModule
          ),
      },
    ],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
