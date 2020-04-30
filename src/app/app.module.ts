import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routingArr } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderDisplayPageComponent } from './Header/header-display-page/header-display-page.component';
import { FooterDisplayPageComponent } from './Footer/footer-display-page/footer-display-page.component';
import { LoginDisplayPageComponent } from './login/login-display-page/login-display-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { ForgotpasswordPageComponent } from './Login/login-display-page/forgotpassword-page/forgotpassword-page.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { BlogPageComponent } from './News/Blog/blog-page/blog-page.component';
import { ProductDisplayPageComponent } from './shop/product/product-display-page/product-display-page.component';
import { CartDisplayPageComponent } from './shop/cart/cart-display-page/cart-display-page.component';
import { ServicePageComponent } from './services/service-page/service-page.component';
import { ShopSinglePageComponent } from './shop/shopSingle/shop-single-page/shop-single-page.component';
import { RouterModule, ROUTES } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDisplayPageComponent,
    FooterDisplayPageComponent,
    LoginDisplayPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ForgotpasswordPageComponent,
    ContactPageComponent,
    BlogPageComponent,
    ProductDisplayPageComponent,
    CartDisplayPageComponent,
    ServicePageComponent,
    ShopSinglePageComponent
  ],
  imports: [
    routingArr,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
