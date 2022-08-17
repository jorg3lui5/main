import { Router } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  // encapsulation: ViewEncapsulation.None,
})
export class AuthLoginComponent {
  constructor(private route: Router) {}
  pass = false;

  login(): void {
    this.route.navigateByUrl('home/admission');
  }

  showPass(): void {
    this.pass = !this.pass;
  }
}
