import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServerEditComponent } from './server-edit/server-edit.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users', component: UsersComponent,
children:[
  {path: ':id/:name', component: UserComponent}
  ]
  },

  {path: 'servers', component:ServersComponent, canActivateChild: [AuthguardService],
children: [
  {path: ':id',component: ServerComponent},
  {path: ':id/:edit', component:ServerEditComponent}
]},
// {path:'not-found', component: PagenotfoundComponent},
{path:'not-found', component: ErrormessageComponent, data:{message :'data is not found'}},
{path:'**', redirectTo:'/not-found'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
