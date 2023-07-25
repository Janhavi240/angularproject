import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  router: any;

  constructor() { }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login-pg']);
  }
}
