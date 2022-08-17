import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'admission',
  templateUrl: './admission.component.html',
  // encapsulation: ViewEncapsulation.None,
  styles:[`
    :host
      width:100%
  `]
})
export class AdmissionComponent {}
