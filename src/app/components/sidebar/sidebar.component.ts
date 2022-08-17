
import { NavigationEnd, Router } from '@angular/router';
import { Component, ViewEncapsulation,OnInit } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit{
  constructor(private route:Router){}

  showAdmission = false
  pathname = window.location.pathname
  isPress = false

  logout(): void {
    this.route.navigateByUrl('/auth/login');
  }

 clickShowAdmission(): void {
  this.showAdmission = !this.showAdmission
  }

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            this.pathname = event.url;
            this.isPress = this.pathname === '/admission' || this.pathname === '/admission/assessment'
        }
    });
}
  clickShowChangeProduct(): void {
    this.showAdmission = false
    }
  clickShowAdditional(): void {
    this.showAdmission = false
    }
  clickShowReprintCards(): void {
    this.showAdmission = false
    }
  clickShowChangePin(): void {
    this.showAdmission = false
    }
  clickShowPrintCard(): void {
    this.showAdmission = false
    }
  clickShowManagement(): void {
    this.showAdmission = false
    }
  clickShowDashboard(): void {
    this.showAdmission = false
    }
  clickShowMaintainers(): void {
    this.showAdmission = false
    }
}
