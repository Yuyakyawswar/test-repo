import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';

export const memberGuard: CanActivateFn = (route, state) => {
  let user: any = inject(SecurityService).activeUser
  return user && (user.role === 'Member' || user.role == 'Admin') ? true :
    inject(Router).navigate(['/public'])
};
