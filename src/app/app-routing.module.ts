import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { GuideComponent } from './pages/guide/guide.component';
import { AllianceMilestonesComponent } from './pages/alliance-milestones/alliance-milestones.component';
import { AdminComponent } from './admin/admin.component';
import { ClapBackComponent } from './clap-back/clap-back.component';
import { ProteinCalculatorComponent } from './protein-calculator/protein-calculator.component';
import { WarzoneExpeditionComponent } from './unpublished-pages/warzone-expedition/warzone-expedition.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'nomads', pathMatch: 'full'
  },
  {
    path: 'nomads', component: MembersComponent
  },
  {
    path: 'guide', component: GuideComponent
  },
  {
    path: 'milestones', component: AllianceMilestonesComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'proteincalculator', component: ProteinCalculatorComponent
  },
  {
    path: 'clapbackgpt', component: ClapBackComponent
  },
  {
    path: 'warzone-expedition', component: WarzoneExpeditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
