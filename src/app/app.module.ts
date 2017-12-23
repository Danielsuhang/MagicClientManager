import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';


import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
// import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './lookup/insurance.component';
import { NavbarComponent } from './navbar/navbar.component';


import {ItemService} from './services/item.service';
import { EstimateComponent } from './estimate/estimate.component';
import { DetailsComponent } from './details/details.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { AddComponent } from './add-data/add.component';

const RoutesModule: Routes = [
  {path:'', component: HomeComponent},
  {path:'lookup', component: InsuranceComponent},
  {path: 'estimate', component: EstimateComponent},
  {path: 'plan-details', component: DetailsComponent},
  {path: 'visualizations', component: VisualizationsComponent},
  {path: 'add-data', component: AddComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsuranceComponent,
    NavbarComponent,
    EstimateComponent,
    DetailsComponent,
    VisualizationsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, MatSliderModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, HttpModule,
    MatTableModule, MatToolbarModule, 
    AngularFireModule.initializeApp(environment.firebase),
    MatRadioModule, MatInputModule, MatFormFieldModule,
    RouterModule.forRoot(RoutesModule), AngularFireDatabaseModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
