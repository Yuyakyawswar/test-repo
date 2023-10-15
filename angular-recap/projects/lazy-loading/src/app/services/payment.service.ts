import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Payment } from '../dto/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payments : Payment[] = [
    {
      id : 1,
      payDate : new Date(2023,7,17),
      paymentType : 'KPay',
      amount : 100000,
      sender : 'Pphyo',
      receiver : 'MK'

    },
    {
      id : 2,
      payDate : new Date(2023,7,18),
      paymentType : 'Wave',
      amount : 140000,
      sender : 'Min lwin',
      receiver : 'Pa Pa'

    }
  ]

  getAll(): Observable<Payment[]> {
    return of(this.payments)
  }

  findWithId(id : number) : Observable<Payment | undefined>{
    return of(this.payments.filter(p => p.id == id).pop())
  }
}
