import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.scss']
})
export class ErrormessageComponent implements OnInit {
  errorMessage;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  // this.errorMessage =this.route.data.subscribe((data: Data)=>{
  //   this.errorMessage =data['message'];
  //   console.log(this.errorMessage);
  // })

  this.errorMessage  =this.route.snapshot.data['message'];
  }

}
