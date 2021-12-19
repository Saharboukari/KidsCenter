import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { ForgetComponent } from './components/forget/forget.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResultComponent } from './components/result/result.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

import { EditprofileComponent } from './components/editprofile/editprofile.component';

import { AddEventComponent } from './components/add-event/add-event.component';
import { EventCommentsComponent } from './components/event-comments/event-comments.component';




const routes: Routes = [
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'forget', component: ForgetComponent},
  {path:'result', component: ResultComponent},
  {path:'search', component: SearchComponent},
  {path:'events', component: EventsComponent},
  {path:'profile', component: ProfileComponent},

  {path:'editprofile', component: EditprofileComponent},

  {path:'addEvent', component: AddEventComponent},
  {path:'comments', component:  EventCommentsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
