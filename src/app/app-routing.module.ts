import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then((m) => m.VerifyEmailPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'crearresta',
    loadChildren: () => import('./crearresta/crearresta.module').then( m => m.CrearrestaPageModule)
  },
  {
    path: 'ordenar',
    loadChildren: () => import('./ordenar/agregarmenu.module').then( m => m.OrdenarPageModule)
  },
  {
    path: 'setmenu',
    loadChildren: () => import('./setmenu/setmenu.module').then( m => m.SetmenuPageModule)
  },  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'vermenu',
    loadChildren: () => import('./vermenu/vermenu.module').then( m => m.VermenuPageModule)
  },
  {
    path: 'comprar',
    loadChildren: () => import('./comprar/comprar.module').then( m => m.ComprarPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
