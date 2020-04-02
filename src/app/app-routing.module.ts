import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { GoLoginGuard } from './shared/guards/go-login.guard';
import { GoHomeGuard } from './shared/guards/go-home.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GoLoginGuard] },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule), canActivate: [GoHomeGuard]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
