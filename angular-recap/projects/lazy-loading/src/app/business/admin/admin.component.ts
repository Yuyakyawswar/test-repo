import { Component } from '@angular/core';
import { SecurityService } from '../../services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  constructor(private service: SecurityService, private router: Router) {}

  logOut() {
    this.service.logOut()
    this.router.navigate(['/public'])
  }

}
