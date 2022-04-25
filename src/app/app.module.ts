import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {AppRoutingModule} from './app-routing.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {FormsModule} from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {CritroleSearchBarComponent} from "./commons/critrole-search-bar/critrole-search-bar.component";
import {CritroleSearchTranscriptsComponent} from "./critrole-search-transcripts/critrole-search-transcripts.component";
import {HttpClientModule} from "@angular/common/http";
import {CritroleToolbarComponent} from "./commons/critrole-toolbar/critrole-toolbar.component";


@NgModule({
  declarations: [
    AppComponent,
    CritroleSearchTranscriptsComponent,
    CritroleSearchBarComponent,
    CritroleToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
