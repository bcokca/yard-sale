/**
 * Created by bcokca on 10/29/16.
 */

import {SaleItem} from "./sale-item.model";


export class Sale {
    id: string;
    _id: string;
    title: string;
    address: SaleAddress;
    saleItems: Array<SaleItem>;
    ownerId: string;
    createdDate: Date;
    updatedDate: Date;
    description: string;
    start_date: Date;
    end_date: Date;
    latitude: string;
    longitude: string;

    constructor(id: string, title: string, address: SaleAddress) {
        this.id = id;
        this.title = title;
        this.address = address;
    }

}

export class SaleAddress{
    street: string;
    apt: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
}