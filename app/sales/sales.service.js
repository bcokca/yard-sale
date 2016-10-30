/**
 * Created by bcokca on 10/29/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sale_model_1 = require("./sale.model");
var SalesService = (function () {
    function SalesService() {
        this.sales = [];
        this.sales.push(new sale_model_1.Sale('1', 'My Sale', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new sale_model_1.Sale('2', 'My Sale2', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new sale_model_1.Sale('3', 'My Sale3', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new sale_model_1.Sale('4', 'My Sale4', '166 Monroe, Santa Clara, CA'));
        this.sales.push(new sale_model_1.Sale('5', 'My Sale5', '166 Monroe, Santa Clara, CA'));
    }
    SalesService.prototype.getSale = function (id) {
        return this.getSales()
            .then(function (sales) { return sales.find(function (sale) { return sale.id === id; }); });
    };
    SalesService.prototype.getSales = function () {
        return Promise.resolve(this.sales);
    };
    SalesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SalesService);
    return SalesService;
}());
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map