import { Routes } from '@angular/router';
import { ProductApiDisplay } from '../product-api-display/product-api-display';
import { ProductList } from '../product-list/product-list';
import { ProductDetails } from '../product-details/product-details';

export const productParentRoutes: Routes = [
  { path: '', component: ProductApiDisplay }, 
  { path: 'product-list', component: ProductList},
  { path: 'demo', component: ProductApiDisplay },
  { path: 'product-list/details/:id', component: ProductDetails }
];