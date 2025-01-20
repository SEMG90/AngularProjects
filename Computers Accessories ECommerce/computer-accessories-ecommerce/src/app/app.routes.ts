import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ComputerComponent } from './components/computer/computer.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: "", component:AuthLayoutComponent, children:[
        { path: "", redirectTo: "login", pathMatch:"full" },
        { path: "login", component:LoginComponent},
        { path: "register", component:RegisterComponent}
    ] },
    { path: "", component:BlankLayoutComponent, children:[
        { path: "", redirectTo:"home", pathMatch:"full" },
        { path: "home", component:HomeComponent},
        { path: "about", component:AboutComponent},
        { path: "product", component:ProductComponent},
        { path: "computer", component:ComputerComponent},
        { path: "laptop", component:LaptopComponent},
        { path: "contact", component:ContactComponent}
    ]},
    { path: "**", component:ErrorComponent}
];
