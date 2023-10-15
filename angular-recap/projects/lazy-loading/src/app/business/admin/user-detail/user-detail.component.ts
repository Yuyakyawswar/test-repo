import { Component, OnInit } from '@angular/core';
import { User } from '../../../dto/user';
import { SecurityService } from '../../../services/security.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit{

  constructor(private servie : SecurityService,private route : ActivatedRoute){

  }

  user : User = {
    name : '',
    email : '',
    role : 'Admin',
    password : ''
  }

  ngOnInit(): void {

    let email = ''
    // this.route.params.subscribe(param => {
    //   let p = param['email']
    //   if(p) {
    //     email = p
    //   }
    // })

    this.route.paramMap.subscribe(param => {
      let p = param.get('email')
      if(p){
        email = p
      }
    })

      this.servie.findWithEmail(email).subscribe(result => {
        let user  = result as User
        this.user = user
      })
  }

}
