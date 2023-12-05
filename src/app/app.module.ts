import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategorieService } from './Categories/Categories.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    CartComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
