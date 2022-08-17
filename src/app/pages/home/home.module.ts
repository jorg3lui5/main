import { NgModule } from '@angular/core';
import { homeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(homeRoutes), CommonModule, SidebarModule],
  //   bootstrap: [HomeComponent],
})
export class HomeModule {}
