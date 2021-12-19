import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetComponent } from './components/forget/forget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsComponent } from './components/events/events.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { EditprofileComponent } from './components/editprofile/editprofile.component'
import { ProfileComponent } from './components/profile/profile.component';

import { AddEventComponent } from './components/add-event/add-event.component'
import { SearchFilterPipe } from './components/search/search-filter.pipe';
import { AdminComponent } from './admin/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { EventCommentsComponent } from './components/event-comments/event-comments.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgetComponent,
    EventsComponent,
    ResultComponent,
    SearchComponent,

    EditprofileComponent,
    ProfileComponent,

    AddEventComponent,
    SearchFilterPipe,
    AdminComponent,
    EventCommentsComponent,
    UserprofileComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
