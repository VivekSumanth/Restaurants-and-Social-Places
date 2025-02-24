import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';



import { MatToolbarModule, MatFormFieldModule,MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';


import { PlacesService } from './places.service';

import { FindComponent } from './components/find/find.component';
import { ListOfPlacesComponent } from './components/list-of-places/list-of-places.component';
import { ListOfStationsComponent } from './components/list-of-stations/list-of-stations.component';
import {RealTimeLineComponent} from './components/real-time-line-chart/real-time-line-chart.component'

import { HeatMapComponent } from './components/divvy-heat-map/heat-map.component';

import { BarChartComponent } from './components/yelp-reviews-chart/yelp-reviews-bar-chart.component';
import { DivvyTripsChartComponent } from './components/divvy-trips-chart/divvy-trips-chart.component';

import { RealTimeSMALineComponent } from './components/real-time-sma-line-chart/real-time-sma-line-chart.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationService } from './components/authentication.service';
import { AuthGuardService } from './components/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {IssueService} from './issue.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewService } from './review.service';
import { PlaceDetailComponent } from './components/place-detail/place-detail.component';
import { GetUserReviewsComponent } from './components/get-user-reviews/get-user-reviews.component';
import { ReccomendationsComponent } from './components/reccomendations/reccomendations.component';


const routes: Routes = [
  { path: 'find', component: FindComponent},
  { path: 'list_of_places', component: ListOfPlacesComponent},
  { path: 'list_of_stations', component: ListOfStationsComponent},
  { path: 'realtime_line_chart', component: RealTimeLineComponent},
  { path: 'heat_map', component: HeatMapComponent},
  { path: 'yelp_reviews_chart', component: BarChartComponent},
  { path: 'divvy_trips_chart', component: DivvyTripsChartComponent},
  { path: 'sma_chart', component: RealTimeSMALineComponent},
  { path: '', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'placedetail', component: PlaceDetailComponent},
  { path: 'get-user-reviews', component: GetUserReviewsComponent},
  { path: 'reccomendations', component: ReccomendationsComponent},

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'login', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    ListOfPlacesComponent,
    ListOfStationsComponent,
    RealTimeLineComponent,
    HeatMapComponent,
    RealTimeSMALineComponent,
    BarChartComponent,
    DivvyTripsChartComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    ReviewsComponent,
    PlaceDetailComponent,
    GetUserReviewsComponent,
    ReccomendationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    SatDatepickerModule,
    SatNativeDateModule,




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// SETUP NEEDED ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//  1. Create your API key from Google Developer Website
//  2. Install AGM package: npm install @agm/core @ng-bootstrap/ng-bootstrap --
//  3. Here is the URL for an online IDE for NG and TS that could be used to experiment
//  4. AGM live demo is loacted at this URL: https://stackblitz.com/edit/angular-google-maps-demo


    AgmCoreModule.forRoot({apiKey: 'addkey'+ '&libraries=visualization'}),
    
    FormsModule,
    NgbModule,
    MatCheckboxModule

  ],

  providers: [PlacesService, GoogleMapsAPIWrapper,AuthenticationService,ReviewService,AuthGuardService,IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
