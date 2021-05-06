import { Component, OnInit } from '@angular/core';
import { Router,ParamMap, ActivatedRoute } from '@angular/router';
import { books } from 'src/app/book';
import { BookdetailService } from 'src/app/bookdetail.service';
import { RegisteruserService } from 'src/app/registeruser.service';
import { SignedusersService } from 'src/app/signedusers.service';

 interface Product {
  pid: number;
  img: string;
  title:string,
   qty: number;
   price: number;
   discount:number;
 totalAmount?: number;
 }

// interface cart{
//   uid:string,
//   pid:string,
//   title:string,
//   price:number
//   totalAmount?:number
// }

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  bookdetail:books[]=[]
  title:any
  productArray:Product[]=[]
  total: number=0;
  grandtot:number=0;
  dis:number=0;

  constructor(private bs:BookdetailService,private route:ActivatedRoute,private su:SignedusersService,private rs:RegisteruserService) { }

  ngOnInit() {
    
      
      this.su.getuserInfo(this.rs.getuserid()).subscribe((data)=>{
          this.productArray=data.cart
          console.log(this.productArray)
          this.productArray.forEach((product) => {
            product.totalAmount = product.price;
            console.log(product.totalAmount)
            console.log(1)
            this.total=this.total+product.totalAmount;
            this.dis=this.dis+product.discount
          });
      })

      
      
      
 
}

  
  // productArray:Product[]=[{
  //   proId:1,
  //   img:"https://danielk.tech/user/pages/01.home/best-angular-books-of-2021/learn%20angular%20in%2024%20hours.jpeg",
  //   qty:1,
  //   baseAmount: 800,
  //   discount:10,
  //   },
  //   {
  //     proId:2,
  //     img:"https://imgv2-2-f.scribdassets.com/img/word_document/382516900/original/7d5b503a5c/1583183117?v=1",
  //     qty:1,
  //     baseAmount: 1000,
  //     discount:20,
  //     },
  //     {
  //       proId:3,
  //       img:"https://danielk.tech/user/pages/01.home/best-angular-books-of-2021/learn%20angular%20in%2024%20hours.jpeg",
  //       qty:1,
  //       baseAmount: 500,
  //       discount:5,
  //       }
  //   ];
  // ngOnInit(): void {
  //   // this.productArray.forEach((product) => {
  //   //   product.totalAmount = product.baseAmount;
  //   //   this.total=this.total+product.totalAmount;
  //   //   this.dis=this.dis+product.discount
  //   // });
    

  // }

 inc(prod:any)
 {
   prod.qty=prod.qty+1;
  prod.totalAmount=prod.price*prod.qty;
   this.total=this.total+prod.price;
 }

 dec(prod:any)
 {
   if(prod.qty!=1)
   {
     prod.qty=prod.qty-1;
     prod.totalAmount=prod.price*prod.qty;
    this.total=this.total-prod.price;
  }
 }

 remove(prod:any){
   console.log("removed"+ prod.proId)
   this.productArray.splice(prod.proId-1,1);
   this.total=this.total-prod.totalAmount;
  this.dis=this.dis-prod.discount;
   console.log(prod)
}
}





