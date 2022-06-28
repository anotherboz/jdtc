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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtOneComponent } from './components/ancien-testament/at-one/at-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtTwoComponent } from './components/ancien-testament/at-two/at-two.component';
import { CrucifixComponent } from './components/ui/crucifix/crucifix.component';
import { ResultComponent } from './components/ui/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckListComponent } from './components/ui/check-list/check-list.component';
import { ValidateComponent } from './components/ui/validate/validate.component';
import { PictureListComponent } from './components/ui/picture-list/picture-list.component';
import { AtThreeComponent } from './components/ancien-testament/at-three/at-three.component';
import { AtFourComponent } from './components/ancien-testament/at-four/at-four.component';

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
    SaintsComponent,
    AtOneComponent,
    AtTwoComponent,
    CrucifixComponent,
    ResultComponent,
    CheckListComponent,
    ValidateComponent,
    PictureListComponent,
    AtThreeComponent,
    AtFourComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
