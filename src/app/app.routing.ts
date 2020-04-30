import { Routes,RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { LoginDisplayPageComponent } from './login/login-display-page/login-display-page.component';
import { UserAuthGuardService } from './user-auth-guard.service';
import { ForgotpasswordPageComponent } from './Login/login-display-page/forgotpassword-page/forgotpassword-page.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { BlogPageComponent } from './News/Blog/blog-page/blog-page.component';
import { CartDisplayPageComponent } from './shop/cart/cart-display-page/cart-display-page.component';
import { ProductDisplayPageComponent } from './shop/product/product-display-page/product-display-page.component';
import { ServicePageComponent } from './services/service-page/service-page.component';

const arr:Routes=[
  {path:'',component:HomePageComponent},
  {
  path:'nav',canActivate:[UserAuthGuardService],component:HomePageComponent,children:
  [
    {path:'login',component:LoginDisplayPageComponent},
    {path:'forgotPassword',component:ForgotpasswordPageComponent},
    {path:'contact',component:ContactPageComponent},
    {path:'blog',component:BlogPageComponent},
    {path:'product',component:ProductDisplayPageComponent},
    {path:'cart',component:CartDisplayPageComponent},
    {path:'service',component:ServicePageComponent}
  ]
  },
  {path:'**',component:PageNotFoundComponent}
];
export const routingArr=RouterModule.forRoot(arr);
