
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AncienTestamentComponent } from './components/ancien-testament/ancien-testament.component';
import { CommunauteComponent } from './components/communaute/communaute.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { MenuComponent } from './components/menu/menu.component';
import { MesseComponent } from './components/messe/messe.component';
import { NouveauTestamentComponent } from './components/nouveau-testament/nouveau-testament.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { SaintsComponent } from './components/saints/saints.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ancien-testament', component: AncienTestamentComponent },
  { path: 'communaute', component: CommunauteComponent },
  { path: 'histoire', component: HistoireComponent },
  { path: 'messe', component: MesseComponent },
  { path: 'nouveau-testament', component: NouveauTestamentComponent },
  { path: 'organisation', component: OrganisationComponent },
  { path: 'saints', component: SaintsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
