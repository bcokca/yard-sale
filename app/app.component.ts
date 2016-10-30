/**
 * Created by bcokca on 10/28/16.
 */

import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    styles: [`
        h1 {
    font-size: 1.2em;
    color: #999;
    margin-bottom: 0;
    }
    h2 {
        font-size: 2em;
        margin-top: 0;
        padding-top: 0;
    }
    nav a {
        padding: 5px 10px;
        text-decoration: none;
        margin-top: 10px;
        display: inline-block;
        background-color: #eee;
        border-radius: 4px;
    }
    nav a:visited, a:link {
        color: #607D8B;
    }
    nav a:hover {
        color: #039be5;
        background-color: #CFD8DC;
    }
    nav a.active {
        color: #039be5;
    }
    
    `],
    template: `
        <yard-sale-navbar></yard-sale-navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <router-outlet></router-outlet>
                </div>

            </div>
        </div>
    `

})
export class AppComponent{
}