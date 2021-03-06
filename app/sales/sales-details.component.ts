/**
 * Created by bcokca on 10/29/16.
 */

import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import {SalesService} from './sales.service';

import {Sale} from "./sale.model";
import {Location} from "@angular/common";
import {LatLng} from "angular2-google-maps/core";

@Component({
    moduleId: module.id,
    styles: ['.sebm-google-map-container {height: 300px;}'],
    selector: 'yard-sales-details',
    templateUrl: './sales-details.component.html'
})

export class YardSaleDetailsComponent implements OnInit{
    sale: Sale;
    latLng: LatLng;



    /**
     * This will be triggered before constructor
     * //todo -- in order to convert a string to number use +
     */
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.salesService.getSale(id)
                .then(sale => {
                    this.sale = sale
                });
        });

        this.salesService.getLatLng('dwa')
            .then(result=>{
                console.log('result', result);
                this.latLng = result.results[0].geometry.location;
                console.log('latLng', this.latLng);
            })
    }

    constructor(
        private route: ActivatedRoute,
        private salesService: SalesService,
        private location: Location){
    }

    goBack(){
        this.location.back();
    }

}