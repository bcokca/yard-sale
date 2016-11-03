/**
 * Created by bcokca on 10/29/16.
 */

import {Component} from '@angular/core';
import {Auth} from '../authentication/auth.service';

@Component({
    moduleId: module.id,
    selector: 'yard-sale-navbar',
    templateUrl: './navbar.html'
})
export class Navbar{
    title: string = 'Yard Sale';
    constructor(private auth: Auth){
    }

    goToProfile(){

    }

}

