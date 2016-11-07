/**
 * Created by bcokca on 11/1/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'search',
    template: `
       <div class="input-group" style="margin: 0 auto; width: 50%;">
            <span class="input-group-addon" id="basic-addon1">Near</span>
            <input type="text" class="form-control" style=" width: 350px;" 
                placeholder="address, neighborhood, city, state or zip" aria-describedby="basic-addon1">
        </div>
    `
})
export class Search{
    constructor(){
        console.log('search is here');
    }
}