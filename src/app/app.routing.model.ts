import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { MainPageComponent } from "./layout/main-page/main-page.component";
import { ProductPageComponent } from "./layout/product-page/product-page.component";
import { CategoryProductsComponent } from "./category-products/category-products.component";
import { CartComponent } from "./layout/cart/cart.component";
import { PageNotFoundComponent } from "./layout/page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { LoginComponent } from "./layout/login/login.component";
import { AccountComponent } from "./layout/account/account.component";

const appRoutes:Route[]=[{path:"",pathMatch:"full",component:MainPageComponent},
{path:"cart",component:CartComponent},
{path:"login",component:LoginComponent},
{path:"account/:section",canActivate:[AuthGuardService],component:AccountComponent},
{path:"product/:id",component:ProductPageComponent},
{path:"page-not-found",component:PageNotFoundComponent},
{path:":categorie",component:CategoryProductsComponent},

{path:"**",redirectTo:"/page-not-found"}
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}