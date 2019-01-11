import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardsService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['auth/register']);
      return false;
    }
    this.router.navigate(['auth/profile']);
    return true;
  }

  private isAuthenticated() {
    return localStorage.getItem('isRegistered');
  }
}

