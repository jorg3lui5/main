import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'admission' },
  { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'admission' },

  // Auth routes for guests
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'admission',
        loadChildren: () =>
          import('./admission/admission.module').then((m) => m.AdmissionModule),
      },
      {
        path: 'admission/assessment',
        loadChildren: () =>
          import('./admission/assessment/assessment.module').then(
            (m) => m.AssessmentModule
          ),
      },
      // {
      //     path: "change-product",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/change-product/change-product.module"
      //         ).then((m) => m.ChangeProductModule),
      // },
      // {
      //     path: "additional",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/additional/additional.module"
      //         ).then((m) => m.AdditionalModule),
      // },
      // {
      //     path: "reprint-cards",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/reprint-cards/reprint-cards.module"
      //         ).then((m) => m.ReprintCardsModule),
      // },
      // {
      //     path: "change-pin",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/change-pin/change-pin.module"
      //         ).then((m) => m.ChangePinModule),
      // },
      // {
      //     path: "print-card",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/print-card/print-card.module"
      //         ).then((m) => m.PrintCardModule),
      // },
      // {
      //     path: "management",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/management/management.module"
      //         ).then((m) => m.ManagementModule),
      // },
      // {
      //     path: "dashboard",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/dashboard/dashboard.module"
      //         ).then((m) => m.DashboardModule),
      // },
      // {
      //     path: "maintainers",
      //     loadChildren: () =>
      //         import(
      //             "app/modules/home/maintainers/maintainers.module"
      //         ).then((m) => m.MaintainersModule),
      // }
    ],
  },
];
