

//The input symbol is included
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  //Adding a hero property,preceded by the @Input() decorator
  @Input() hero: Hero;//hero property 

 



  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  /* 1. The ActivatedRoute holds information about the route to the instance of HeroDetailComponent*/
  /* 2. The HeroService gets hero data from remote server */
  /* 3.The location is an Angular service for interacting with the browser */
  
  
  
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
  }


