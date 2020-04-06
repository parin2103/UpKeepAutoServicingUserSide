import { Routes,RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDisplayComponent } from './shop/product/productDisplay/product-display/product-display.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { UserAuthGuardService } from './user-auth-guard.service';

const arr:Routes=[
    {path:'nav',canActivate:[UserAuthGuardService],component:HomeComponent,children:[
      {path:'',component:HomeComponent},
      {path:'Home',component:HomeComponent},
      {path:'product',component:ProductDisplayComponent},
      {path:'login',component:LoginFormComponent},
      {path:'**',component:PageNotFoundComponent}
    ]}
]
export const routingArr=RouterModule.forRoot(arr);
