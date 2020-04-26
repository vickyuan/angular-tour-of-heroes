import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
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

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  onSelect(herohtml: Hero): void {
    this.selectedHero = herohtml;
    this.messageService.add(`HeroService: Selected hero id=${herohtml.id}`);
  }

  getHeroesC(): void {
    this.heroService.getHeroesS()
        .subscribe(heroesobs => this.heroes = heroesobs);
  }


  // 页面出来就要加载的数据的对应的方法写这里，有动作才响应的写外面
  ngOnInit() {
    this.getHeroesC();
  }

}
