import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { LoginPgComponent } from './login-pg/login-pg.component';
 import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { NavbarComponent } from './sharedpage/navbar/navbar.component';
import { LogoutService } from './logout-service';


const routes: Routes = [
  {path:' home' ,component:HomeComponent},
  {path:'login-pg', component:LoginPgComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'navbar',component:NavbarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
