import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html'
})
export class MemberComponent {

  constructor(private router: Router, private service: SecurityService) {}

  logOut() {
    this.service.logOut()
    this.router.navigate(['/public'])
  }

}
