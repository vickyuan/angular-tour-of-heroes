import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent}
];
// 元数据会初始化路由器，并开始监听浏览器地址的变化。
@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  // 导出 RouterModule，以便它在整个应用程序中生效
  exports: [RouterModule]
})
export class AppRoutingModule { }
