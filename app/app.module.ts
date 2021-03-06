import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';


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
import {UserProfile} from './profile/profile.component';
import {Search} from './search/search.component';
import {Auth} from './authentication/auth.service';
import {AuthGuard} from './authentication/auth-guard.service'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        TabsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBaNsYoKJnE6f9fwFlDKzqnLh6rVOlbulw'
        })
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        YardSaleComponent,
        YardSaleDetailsComponent,
        YardSaleSaveComponent,
        Navbar,
        UserProfile,
        Search],
    providers: [
        HeroService,
        SalesService,
        AUTH_PROVIDERS,
        Auth,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

