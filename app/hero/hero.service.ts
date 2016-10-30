/**
 * Created by bcokca on 10/27/16.
 */

import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
    getHeroes(): Promise<Array<Hero>> {
        return Promise.resolve(HEROES);
    } // stub

    getHero(id: number): Promise<Hero>{
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}
