import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', loadChildren: () => import('./pages/home/home.routes').then(c => c.HomeRoute) },
  {
    path: 'details', loadChildren: () => import('./pages/details/details.routes').then(c => c.DetailsRoute)
  },
  {
    path: 'wishlist', loadChildren: () => import('./pages/wishlist/wishlist.routes').then(c => c.WishlistRoute)
  },
];