/**
 * Created by bcokca on 10/26/16.
 */

import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from "./hero.service";
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    styleUrls: ['./hero.component.css'],

    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{

    ngOnInit(): void{
        this.getHeroes();
    }


    selectedHero : Hero;
    heroes : Array<Hero>;

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }


    onSelect(hero){
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }


}
