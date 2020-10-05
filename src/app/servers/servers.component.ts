import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers=[];

  constructor(private ServerService: ServerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.servers =this.ServerService.getServers();
  }

  onReload(){
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }



}
