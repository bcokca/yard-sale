/**
 * Created by bcokca on 10/29/16.
 */

import {SaleItem} from "./sale-item.model";

export class Sale {
    id: string;
    title: string;
    address: string;
    saleItems: Array<SaleItem>;
    ownerId: string;
    createdDate: Date;
    updatedDate: Date;
    description: string;
    start_date: Date;
    end_date: Date;
    latitude: string;
    longitude: string;

    constructor(id: string, title: string, address: string) {
        this.id = id;
        this.title = title;
        this.address = address;
    }

}