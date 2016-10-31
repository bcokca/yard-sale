/**
 * Created by bcokca on 10/30/16.
 */

import {Component} from '@angular/core';
import {Auth} from "../auth.service";

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: './profile.component.html'
})
export class UserProfile{
    currentUser: {};

    constructor(private auth: Auth){
        this.currentUser = auth.currentUser;
    }
}