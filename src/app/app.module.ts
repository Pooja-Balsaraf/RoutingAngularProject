import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Authservice } from './auth.service';
import { AuthguardService } from './authguard.service';
import { ErrormessageComponent } from './errormessage/errormessage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    ServerEditComponent,
    UserComponent,
    ServerComponent,
    PagenotfoundComponent,
    ErrormessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Authservice, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
