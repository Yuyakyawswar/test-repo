import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../../../services/security.service';

declare var bootstrap: any

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  roles: ReadonlyArray<string> = ['Admin', 'Member']

  modalForm: any

  form: FormGroup

  constructor(fb: FormBuilder,
     private router: Router,
     private service: SecurityService) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.min(5)]]
    })
  }

  ngOnInit(): void {
      this.modalForm = new bootstrap.Modal('#warningModal')
  }

  signUp() {
    if(this.service.activeUser) {
      this.modalForm.show()
    } else {
      if(this.form.valid) {
        this.service.signUp(this.form.value).subscribe(resp => {
          if(resp)
            this.router.navigate([resp.role.toLowerCase()])
        })
      }
    }
  }

  gotoHome() {
    this.router
      .navigate([this.service.activeUser.role.toLowerCase()])
    this.modalForm.hide()
  }

}
