import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'projects/lazy-loading/src/app/dto/payment';
import { PaymentService } from 'projects/lazy-loading/src/app/services/payment.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html'
})
export class PaymentDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute,private service:PaymentService){}

 
  payment : Payment | null | undefined 


  ngOnInit(): void {
      let id = 0
      this.route.queryParamMap.subscribe(param => {
        let p = param.get('id') as string
        if(p){
          id =  + p
        }
        this.getId(id)
      
      })
     
    
  }
  getId(id : number){
    this.service.findWithId(id).subscribe(result => this.payment = result as Payment)
  }

}
