import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CirclesComponent } from './circles/circles.component';
import { MailboxesComponent } from './mailboxes/mailboxes.component';
import { OnChanges } from '@angular/core';
import { LoadtestComponent } from './loadtest/loadtest.component';
import { FollowersComponent } from './followers/followers.component';
import { MessagesComponent } from './messages/messages.component';
import { ActivityComponent } from './activity/activity.component';
import { MessageDashboardComponent } from './message-dashboard/message-dashboard.component';
import { ChatService } from './activity/activity.service';
import { OverviewComponent } from './overview/overview.component';


import {JsonpModule} from '@angular/http';
import {Jsonp} from '@angular/http';

const appRoutes: Routes = [
    { path: '' , redirectTo : 'dashboard' ,pathMatch : 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'circles', component: CirclesComponent },
    { path: 'load-test', component: LoadtestComponent },
    { path: 'circle/:cid/mailboxes', component: MailboxesComponent },
    { path: 'mailboxes/:mid', component: MessageDashboardComponent },
    
 
  ];

  
@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    DashboardComponent,
    CirclesComponent,
    MailboxesComponent,
    LoadtestComponent,
    FollowersComponent,
    MessagesComponent,
    ActivityComponent,
    MessageDashboardComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
