import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {HeroesComponent} from './hero/heroes.component';
import {HeroService} from './hero/hero.service';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from './app-routing.module';

import {YardSaleComponent} from './sales/sales.component';
import {YardSaleDetailsComponent} from "./sales/sales-details.component";
import {YardSaleSaveComponent} from "./sales/sales-save.component";
import {SalesService} from "./sales/sales.service";

import {Navbar} from './navbar/navbar';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        YardSaleComponent,
        YardSaleDetailsComponent,
        YardSaleSaveComponent,
        Navbar],
    providers: [
        HeroService,
        SalesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

