import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './home/overview/overview.component';
import { FilterComponent } from './home/overview/components/filter/filter.component';
import { InfiniteScrollComponent } from './home/overview/components/infinite-scroll/infinite-scroll.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { MainComponent } from './containers/main/main.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EditAlbumComponent } from './profil/edit-album/edit-album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { ProfilCardComponent } from './profil/profil-card/profil-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatBadgeModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    FilterComponent,
    InfiniteScrollComponent,
    ProfilComponent,
    AuthComponent,
    SignUpComponent,
    SignInComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    EditAlbumComponent,
    EditProfilComponent,
    ProfilCardComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
