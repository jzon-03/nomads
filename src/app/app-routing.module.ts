import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { GuideComponent } from './pages/guide/guide.component';
import { AllianceMilestonesComponent } from './pages/alliance-milestones/alliance-milestones.component';
import { AdminComponent } from './admin/admin.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { WarzoneExpeditionComponent } from './unpublished-pages/warzone-expedition/warzone-expedition.component';
import { CalendarComponent } from './calendar/calendar.component';

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
    path: 'calculator', component: CalculatorComponent
  },
  {
    path: 'warzone-expedition', component: WarzoneExpeditionComponent
  },
  {
    path: 'calendar', component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
