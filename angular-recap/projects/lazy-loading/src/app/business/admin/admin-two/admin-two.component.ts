import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { Payment } from '../../../dto/payment';

@Component({
  selector: 'app-admin-two',
  templateUrl: './admin-two.component.html'
})
export class AdminTwoComponent implements OnInit{

  payments : any[] = []
  
  constructor(private service :PaymentService){

  }

  ngOnInit(): void {
      this.service.getAll().subscribe(result => this.payments = result)
  }

  
}
