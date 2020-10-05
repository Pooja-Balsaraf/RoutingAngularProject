import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})


export class ServerComponent implements OnInit {
  server :{id: number, name: string, status: string};
  constructor(private route: ActivatedRoute,
    private Serverservice: ServerService,
    private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server =this.Serverservice.getServer(id);
    console.log(this.server);

    //  this.route.params.subscribe((params :Params)=>{
    //    console.log(params['id']);
    //    this.server =this.Serverservice.getServer(params['id']);
    // })
  }

  onEdit(id :number){
   this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
