/**
 * Created by bcokca on 10/29/16.
 */

import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {HeroesComponent}      from './hero/heroes.component';
import {HeroDetailComponent}  from './hero/hero-detail.component';
import {YardSaleComponent} from './sales/sales.component'
import {YardSaleDetailsComponent} from "./sales/sales-details.component";
import {YardSaleSaveComponent} from './sales/sales-save.component'
import {UserProfile} from "./profile/profile.component";

const routes: Routes = [
    {path: '', redirectTo: '/sales', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},

    //sales related routes
    {path: 'sales', component: YardSaleComponent},
    {path: 'sales/get/:id', component: YardSaleDetailsComponent},
    {path: 'sales/save', component: YardSaleSaveComponent},

    //profile
    {path: 'user-profile', component: UserProfile}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
