import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthLoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

export const routes: Route[] = [
  {
    path: '',
    component: AuthLoginComponent,
  },
];

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class AuthLoginModule {}
