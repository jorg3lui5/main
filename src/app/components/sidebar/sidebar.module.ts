import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';


const routes: Route[] = [
  {
    path: '',
    component: SidebarComponent,
  },
];

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [RouterModule.forChild(routes), CommonModule, MatIconModule],
})
export class SidebarModule {}
