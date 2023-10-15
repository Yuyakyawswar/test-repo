import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../dto/user';

const APP_USER_KEY = "com.jdc.user"

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private users: User[] = [
    {
      name : 'admin',
      email : 'admin@gmail.com',
      role : 'Admin',
      password : 'admin'
    },
    {
      name : 'member',
      email : 'member@gmail.com',
      role : 'Member',
      password : 'member'
    }
  ]
  private _activeUser: any

  signIn(signInForm: any): Observable<any> {
    let result: any
    if(this.users.length > 0) {
      result = this.users.filter(user => user.email === signInForm.email).pop()
    }
    this.activeUser = result
    return of(result)
  }

  signUp(singUpForm: any): Observable<any> {
    this.users.push(singUpForm)
    this.activeUser = singUpForm
    return of(singUpForm)
  }

  set activeUser(user: any) {
    if(user) {
      this._activeUser = user
      localStorage.setItem(APP_USER_KEY, JSON.stringify(user))
    }
  }

  get activeUser() {
    let data = localStorage.getItem(APP_USER_KEY)
    if(data)
      this._activeUser = JSON.parse(data)
    return this._activeUser
  }

  logOut() {
    this._activeUser = undefined
    localStorage.clear()
  }

  getAll(): Observable<User[]>{
    return of(this.users.copyWithin(0))
  }
  findWithEmail(email :string) : Observable<User |string >{
    return of(this.users.filter(user => user.email == email).pop() ?? `No User with ${email}.`)
  }

}
