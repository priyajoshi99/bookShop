import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { books } from '../book';
import { CategoriesbooksService } from '../categoriesbooks.service';
import { RegisteruserService } from '../registeruser.service';
import { AddproductstocartService } from '../addproductstocart.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  name:any
  bookcategories:books[]=[]
  loggeduser:any
  constructor(private route:ActivatedRoute,private cs:CategoriesbooksService,private routes:Router,private rs:RegisteruserService,private ap:AddproductstocartService) { 
    
  }
  navigateto(val:any){
        console.log(val);
         this.routes.navigate([`productdetails/${val}`])
  }
  
  gotocart(i:any){
    let cart={
      uid:this.loggeduser,
      pid:this.bookcategories[i]._id,
      title:this.bookcategories[i].title,
      price:this.bookcategories[i].price,
      qty:1,
      discount:this.bookcategories[i].discount,
    }

   this.ap.addproducts(cart).subscribe((data)=>{
     console.log(data);
     
   })
    this.routes.navigate(['/addtocart'])
  }

  ngOnInit() {
    // this.name=this.route.snapshot.paramMap.get('name');
    this.route.paramMap.subscribe((params:ParamMap)=>{
         this.name=params.get('name')
         this.cs.getbooksbycategories(this.name).subscribe(data=>this.bookcategories=data)
        console.log(this.bookcategories)
      this.loggeduser=this.rs.getuserid()
    })
    
  }

}
