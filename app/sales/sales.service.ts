/**
 * Created by bcokca on 10/29/16.
 */

import {Injectable} from '@angular/core';
import {Sale} from "./sale.model";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SalesService{

    sales: Array<Sale>;
    salesUrl : string = "http://localhost:3001/garage";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){
    }

    getSale(id: string): Promise<Sale>{
        return this.getSales()
            .then(sales => sales.find(sale => sale.id === id));
    }

    getSales(): Promise<Array<Sale>>{

        return this.http.get(this.salesUrl)
            .toPromise()//this is coming from the import on the top import 'rxjs/add/operator/toPromise';
            .then(response => response.json().result as Sale[])
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    saveSale(sale: Sale): Promise<Sale>{
        sale.description = "test";
        sale.end_date = new Date();
        sale.start_date = new Date();
        sale.latitude = 'latitude';
        sale.longitude = 'longitude';

        // const url = `${this.salesUrl}`;
        return this.http
            .post(this.salesUrl, JSON.stringify(sale), {headers: this.headers})
            .toPromise()
            .then(() => sale)
            .catch(this.handleError);
    }




}