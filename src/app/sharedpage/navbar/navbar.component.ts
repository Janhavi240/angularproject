import { Component, OnInit } from '@angular/core';
import { AutherService } from 'src/app/services/auther.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   route: any;

   constructor( private authService:AutherService){}

   ngOnInit(): void {

   }

   onLogout(){
    localStorage.removeItem('signupUser');
    localStorage.clear();
    alert('Logout successfully');
    this.route.navigate(['/login']);
  }

}
