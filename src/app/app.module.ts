import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductPageComponent } from './layout/product-page/product-page.component';
import { CartComponent } from './layout/cart/cart.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { CategorieService } from './Categories/Categories.service';
import { ProductService } from './Products/Product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { AppRoutingModule } from './app.routing.model';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { AppService } from './app.service';
import { FakeApiService } from './Api/fakeApi.service';
import { LoginComponent } from './layout/login/login.component';
import { AccountComponent } from './layout/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { ListElementComponent } from './category-products/list-element/list-element.component';
import { LeftPanelComponent } from './layout/account/left-panel/left-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    CartComponent,
    MainPageComponent,
    CategoryProductsComponent,
    PageNotFoundComponent,
    LoginComponent,
    AccountComponent,
    SideBarComponent,
    ListElementComponent,
    LeftPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CategorieService,ProductService,AuthGuardService,AppService,FakeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
