import { Routes } from '@angular/router';
import { ProductParent } from './components/services/service-api/product-parent/product-parent';
import { productParentRoutes } from './components/services/service-api/product-parent/product-parent.routes';

export const routes: Routes = [
    // {
    //     path:"",
    //     loadChildren: () => 
    //         import('./components/services/service-api/product-parent/product-parent.routes').then(m=>m.productParentRoutes)
    // },
    {
        path: '',
        children: productParentRoutes
    }
];
