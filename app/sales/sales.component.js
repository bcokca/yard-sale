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
var router_1 = require('@angular/router');
var sales_service_1 = require("./sales.service");
var YardSaleComponent = (function () {
    function YardSaleComponent(router, salesService) {
        var _this = this;
        this.router = router;
        this.salesService = salesService;
        this.title = "Yard Sales Will Come Here";
        salesService.getSales()
            .then(function (sales) { return _this.sales = sales; });
    }
    YardSaleComponent.prototype.onSelect = function (sale) {
        this.router.navigate(['/sales', sale.id]);
    };
    YardSaleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'yard-sales',
            templateUrl: './sales.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, sales_service_1.SalesService])
    ], YardSaleComponent);
    return YardSaleComponent;
}());
exports.YardSaleComponent = YardSaleComponent;
//# sourceMappingURL=sales.component.js.map