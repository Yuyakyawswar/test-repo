import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../services/security.service';
import { User } from '../../../dto/user';

@Component({
  selector: 'app-admin-one',
  templateUrl: './admin-one.component.html'
})
export class AdminOneComponent implements OnInit{


  members : User[] = []
  show : boolean = false
  
  constructor(private service : SecurityService){}

  ngOnInit(): void {
      this.service.getAll().subscribe(
        result => this.members = result
      )
  }


}
