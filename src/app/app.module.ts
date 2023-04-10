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
import { AtFiveComponent } from './components/ancien-testament/at-five/at-five.component';
import { AtSixComponent } from './components/ancien-testament/at-six/at-six.component';
import { AtSevenComponent } from './components/ancien-testament/at-seven/at-seven.component';
import { AtHeightComponent } from './components/ancien-testament/at-height/at-height.component';
import { AutofocusDirective } from './components/ui/autofocus.directive';
import { NtOneComponent } from './components/nouveau-testament/nt-one/nt-one.component';
import { NtTwoComponent } from './components/nouveau-testament/nt-two/nt-two.component';
import { NtThreeComponent } from './components/nouveau-testament/nt-three/nt-three.component';
import { NtFourComponent } from './components/nouveau-testament/nt-four/nt-four.component';
import { NtFiveComponent } from './components/nouveau-testament/nt-five/nt-five.component';
import { NtSixComponent } from './components/nouveau-testament/nt-six/nt-six.component';
import { NtSevenComponent } from './components/nouveau-testament/nt-seven/nt-seven.component';
import { NtHeightComponent } from './components/nouveau-testament/nt-height/nt-height.component';
import { NtNineComponent } from './components/nouveau-testament/nt-nine/nt-nine.component';
import { NtTenComponent } from './components/nouveau-testament/nt-ten/nt-ten.component';
import { NtElevenComponent } from './components/nouveau-testament/nt-eleven/nt-eleven.component';
import { NtTwelveComponent } from './components/nouveau-testament/nt-twelve/nt-twelve.component';
import { NtThristeenComponent } from './components/nouveau-testament/nt-thristeen/nt-thristeen.component';
import { NtFourteenComponent } from './components/nouveau-testament/nt-fourteen/nt-fourteen.component';
import { NtFiveteenComponent } from './components/nouveau-testament/nt-fiveteen/nt-fiveteen.component';
import { NtSixteenComponent } from './components/nouveau-testament/nt-sixteen/nt-sixteen.component';
import { NtSeventeenComponent } from './components/nouveau-testament/nt-seventeen/nt-seventeen.component';
import { NtHeighteenComponent } from './components/nouveau-testament/nt-heighteen/nt-heighteen.component';
import { NtNineteenComponent } from './components/nouveau-testament/nt-nineteen/nt-nineteen.component';
import { NtTwentyComponent } from './components/nouveau-testament/nt-twenty/nt-twenty.component';
import { MesseOneComponent } from './components/messe/messe-one/messe-one.component';
import { MesseTwoComponent } from './components/messe/messe-two/messe-two.component';
import { MesseThreeComponent } from './components/messe/messe-three/messe-three.component';
import { MesseFourComponent } from './components/messe/messe-four/messe-four.component';
import { MesseFiveComponent } from './components/messe/messe-five/messe-five.component';
import { OrganisationOneComponent } from './components/organisation/organisation-one/organisation-one.component';
import { OrganisationTwoComponent } from './components/organisation/organisation-two/organisation-two.component';
import { OrganisationThreeComponent } from './components/organisation/organisation-three/organisation-three.component';
import { OrganisationFourComponent } from './components/organisation/organisation-four/organisation-four.component';
import { OrganisationFiveComponent } from './components/organisation/organisation-five/organisation-five.component';
import { OrganisationSixComponent } from './components/organisation/organisation-six/organisation-six.component';
import { OrganisationSevenComponent } from './components/organisation/organisation-seven/organisation-seven.component';

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
    AtFiveComponent,
    AtSixComponent,
    AtSevenComponent,
    AtHeightComponent,
    AutofocusDirective,
    NtOneComponent,
    NtTwoComponent,
    NtThreeComponent,
    NtFourComponent,
    NtFiveComponent,
    NtSixComponent,
    NtSevenComponent,
    NtHeightComponent,
    NtNineComponent,
    NtTenComponent,
    NtElevenComponent,
    NtTwelveComponent,
    NtThristeenComponent,
    NtFourteenComponent,
    NtFiveteenComponent,
    NtSixteenComponent,
    NtSeventeenComponent,
    NtHeighteenComponent,
    NtNineteenComponent,
    NtTwentyComponent,
    MesseOneComponent,
    MesseTwoComponent,
    MesseThreeComponent,
    MesseFourComponent,
    MesseFiveComponent,
    OrganisationOneComponent,
    OrganisationTwoComponent,
    OrganisationThreeComponent,
    OrganisationFourComponent,
    OrganisationFiveComponent,
    OrganisationSixComponent,
    OrganisationSevenComponent,
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
