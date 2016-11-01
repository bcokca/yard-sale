/**
 * Created by bcokca on 10/28/16.
 */

import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
        <yard-sale-navbar></yard-sale-navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center" style="margin-bottom: 50px;">
                    <search></search>
                </div>
                <div class="col-md-12">
                    <router-outlet></router-outlet>
                </div>

            </div>
        </div>
    `

})
export class AppComponent{
}