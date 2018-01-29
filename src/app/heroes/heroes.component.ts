
//The Component class is always imported from the Angular core library
import { Component, OnInit } from '@angular/core';
//The Hero class is imported from hero.ts
import { Hero } from '../hero';
//HEROES constant is imported from the mock-heroes.ts 
//import { HEROES } from '../mock-heroes';

//HeroService is imported from hero.service
import {HeroService} from '../hero.service';

//Component decorator allows you to mark a class as an Angular component and provide additional metadata that determines how the component should be processed, instantiated and used at runtime.
@Component({
  selector: 'app-heroes',//component's CSS element selector
  templateUrl: './heroes.component.html',//location of component's template file
  styleUrls: ['./heroes.component.css']//location of component's private CSS styles
})

//Component class is always exported so that it can be imported elsewhere like in AppModule
export class HeroesComponent implements OnInit {

  //The heroes property stores the object array HEROES which contains the list of mock heroes
  heroes : Hero[];

  //selected hero property can now store objects of type Hero
  //selectedHero: Hero;

  //onSelect function definition-NOTE THE FUNCTION SYNTAX
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/

 
//parameterized constructor
  constructor(private heroService: HeroService) { }

  //getHeroes() retrieves the heroes from the heroService
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/


  //?//
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

 delete(hero: Hero): void {

  //the filter function returns an array without the selected element for deletion
   this.heroes = this.heroes.filter(h => h !== hero);
   this.heroService.deleteHero(hero).subscribe();
 }

  ngOnInit() {
    this.getHeroes();
  }

 
 
 }


  


