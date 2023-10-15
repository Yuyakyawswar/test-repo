export interface Payment {
    id : number
    payDate : Date
    paymentType : 'KPay'| 'Wave' | 'AYA Pay'
    amount : number
    sender : string
    receiver : string
} 