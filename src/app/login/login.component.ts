import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  customers: Customer[] = [];
  flag:boolean = false;
  emailId:string;
  passWord:string;

  constructor(private customerService: CustomerService) {
    this.emailId = "";
    this.passWord = "";
  }

  ngOnInit() {
    this.customerService.findAll().subscribe(data => {
      this.customers = data;
    });
  }

  login(email:string, password:string):boolean{
    console.log(this.customers);
    this.customers.forEach(function(customer) {
          if((customer.email == email)&&(customer.password == password)){
            console.log(true);
            return true;
          }
          else{ 
            console.log(false);
            return false;}
        });
        return false;
  }
  
  // login(email:string, password:string):boolean{
    
  //   this.customers.forEach(function (customer) {
  //     if((customer.email == email)&&(customer.password == password)){
  //       return true;
  //     }
  //   });
  //   return false;
  // }
}
