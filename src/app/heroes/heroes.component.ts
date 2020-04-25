import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*heroprop = 'Windstorm';
  heroitf: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  heroes: Hero[];

  selectedHero: Hero;
  onSelect(herohtml: Hero): void {
    this.selectedHero = herohtml;
  }

  getHeroesC(): void {
    this.heroes = this.heroService.getHeroesS();
  }

  constructor(private heroService: HeroService) { }
  // 页面出来就要加载的数据的对应的方法写这里，有动作才响应的写外面
  ngOnInit() {
    this.getHeroesC();
  }

}
