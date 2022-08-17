import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

export const routes: Route[] = [
  {
    path: '',
    component: AssessmentComponent,
  },
];

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule
    
  ],
})
export class AssessmentModule {}
