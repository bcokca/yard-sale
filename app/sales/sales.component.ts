/**
 * Created by bcokca on 10/29/16.
 */

import {Component} from '@angular/core';
import {Router} from '@angular/router'

import {Sale} from "./sale.model";
import {SalesService} from "./sales.service";

@Component({
    moduleId: module.id,
    selector: 'yard-sales',
    templateUrl: './sales.component.html'
})

export class YardSaleComponent {
    title: string = "Yard Sales Will Come Here";
    sales: Array<Sale>;
    today: Date;

    constructor(private router: Router, private salesService: SalesService) {
        //get sales
        salesService.getSales()
            .then(sales => this.sales = sales);

        //todays date
        this.today = new Date();
    }

    onSelect(sale: Sale) {
        this.router.navigate(['/sales/get', sale.id]);
    }

    gotoSalesSave(){
        this.router.navigate(['/sales-save']);

    }

}