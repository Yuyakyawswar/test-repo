import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../../../services/security.service';

declare var bootstrap: any

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

  form: FormGroup

  modalForm: any

  modalBodyText: any
  userIsActive: boolean = false

  constructor(fb: FormBuilder,
    private router: Router,
    private service: SecurityService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]]
    })
  }

  ngOnInit(): void {
    if(this.service.activeUser)
      this.userIsActive = !this.userIsActive
    this.modalForm = new bootstrap.Modal('#warningModal')
  }

  signIn() {
    if(this.service.activeUser) {
      this.modalBodyText = 'Already active user. Please logout first!'
      this.modalForm.show()
    } else {
      this.service.signIn(this.form.value).subscribe(resp => {
        if(resp) {
          this.router.navigate([this.service.activeUser.role.toLowerCase()])
        } else {
          this.modalBodyText = 'Please enter correct data!'
          this.modalForm.show()
        }
      })
    }
  }

  ok() {
    if(this.userIsActive) {
      this.router.navigate([this.service.activeUser.role.toLowerCase()])
    } else {
      this.router.navigate([this.router.url], {onSameUrlNavigation: 'reload'})
    }

    this.modalForm.hide()
    this.initForm()
  }

  initForm() {
    this.form.patchValue({
      email: '',
      password: ''
    })
  }
}
