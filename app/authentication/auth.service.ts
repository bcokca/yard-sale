/**
 * Created by bcokca on 10/30/16.
 */

import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock('E9V3eNScjL3OWtvGA8eMrEF179KOOAOc', 'open-garage.auth0.com', {});
    private _currentUser: {};

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            console.log('local storage', authResult);
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                }

                console.log('profile', profile);

                localStorage.setItem('profile', JSON.stringify(profile));
            });



        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        // console.log('tokenNotExpired()', tokenNotExpired());
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };

    get currentUser(){
        if(!this._currentUser){
            let profile = localStorage.getItem('profile');
            if(profile){
                this._currentUser = JSON.parse(profile);
            }
        }
        return this._currentUser;
    }

}