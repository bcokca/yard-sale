/**
 * Created by bcokca on 10/29/16.
 */

import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import {SalesService} from './sales.service';

import {Sale} from "./sale.model";
import {Location} from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'yard-sales-save',
    templateUrl: './sales-save.component.html'
})

export class YardSaleSaveComponent implements OnInit{
    sale: Sale;
    title: string;

    /**
     * This will be triggered before constructor
     * //todo -- in order to convert a string to number use +
     */
    ngOnInit(): void {
        console.log('on init');
    }

    constructor(
        private route: ActivatedRoute,
        private salesService: SalesService,
        private location: Location){
        this.initializeSale();
    }

    goBack(){
        this.location.back();
    }

    onSubmit(){
        this.salesService.saveSale(this.sale)
            .then();
        this.initializeSale();
    }


    initializeSale(){
        this.sale = new Sale('1', '', '');
    }

}