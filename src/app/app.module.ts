import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { AncienTestamentComponent } from './components/ancien-testament/ancien-testament.component';
import { NouveauTestamentComponent } from './components/nouveau-testament/nouveau-testament.component';
import { MesseComponent } from './components/messe/messe.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { CommunauteComponent } from './components/communaute/communaute.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { SaintsComponent } from './components/saints/saints.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    AncienTestamentComponent,
    NouveauTestamentComponent,
    MesseComponent,
    OrganisationComponent,
    CommunauteComponent,
    HistoireComponent,
    SaintsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
