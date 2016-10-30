/**
 * Created by bcokca on 10/29/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'yard-sale-navbar',
    template: `
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">{{title}}</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">

                    <li routerLinkActive="active">
                        <a routerLink="/sales" >Sales</a>
                        <!--<a href="#">Link <span class="sr-only">(current)</span></a>-->
                    </li>
                    <li routerLinkActive="active">
                        <a routerLink="/sales/my" >My Sales</a>
                        <!--<a href="#">Link <span class="sr-only">(current)</span></a>-->
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    `
})
export class Navbar{
    title: string = 'Yard Sale';

}

