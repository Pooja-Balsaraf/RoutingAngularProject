import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss']
})

export class ServerEditComponent implements OnInit {
  servers: {
    id: number,
    name: string,
    status :string
  }
  serverName;
  serverStatus;

  allowEdit=false;

  CardData = [];
  constructor(private service: ServerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   console.log(this.route.snapshot.queryParams);
   console.log(this.route.snapshot.fragment);

   this.route.queryParams.subscribe((queryparams: Params)=>{
     this.allowEdit =queryparams['allowEdit'] === '1' ? true : false;
  })
    this.servers= this.service.getServer(1);
    console.log(this.servers);
    this.serverName = this.servers.name;
    this.serverStatus = this.servers.status;
}

  addServer(){
  console.log(this.serverName, this.serverStatus);
  // this.CardData.push({server: this.serverName, status: this.serverStatus});
  // console.log(this.CardData);

  this.service.updateServer(this.servers.id, {name: this.serverName, status: this.serverStatus})
  }

}
