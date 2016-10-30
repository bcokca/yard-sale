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

    constructor(private router: Router, private salesService: SalesService) {
        salesService.getSales()
            .then(sales => this.sales = sales);
    }

    onSelect(sale: Sale) {
        this.router.navigate(['/sales', sale.id]);
    }

}