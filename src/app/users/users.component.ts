import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users =[
    {
      id:1,
      name:'Pooja'
    },

    {
      id: 2,
      name: 'Prachu'
    },
    {
      id:3,
      name: 'Adu'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
