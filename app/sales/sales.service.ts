/**
 * Created by bcokca on 10/29/16.
 */

import {Injectable} from '@angular/core';
import {Sale} from "./sale.model";

@Injectable()
export class SalesService{

    sales: Array<Sale>;

    constructor(){
        this.sales = [];
        this.sales.push(new Sale('1', 'My Sale', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new Sale('2', 'My Sale2', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new Sale('3', 'My Sale3', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new Sale('4', 'My Sale4', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new Sale('5', 'My Sale5', '166 Monroe, Santa Clara, CA'));
    }

    getSale(id: string): Promise<Sale>{
        return this.getSales()
            .then(sales => sales.find(sale => sale.id === id));
    }

    getSales(): Promise<Array<Sale>>{
        return Promise.resolve(this.sales);

    }

}