import { Component, OnInit } from '@angular/core';
import { books } from '../book';
import { BookdetailService } from '../bookdetail.service';
import { NewreleasesService } from '../newreleases.service';
import { ActivatedRoute, ParamMap, Router} from '@angular/router'
import { review } from '../userreview';
import { PostreviewsService } from '../postreviews.service';
import {faStar,faShoppingCart,faStarHalf} from '@fortawesome/free-solid-svg-icons';
import { RegisteruserService } from '../registeruser.service';
import { AddproductstocartService } from '../addproductstocart.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  faStar=faStar
  faShoppingCart=faShoppingCart
  faStarHalf=faStarHalf

  loggeduser:any
  

  formvisible=false
  name="hemanth";
  title: any
  oldprice:any
  discount:any
  newprice:any
  newreleases:books[]=[]
  bookdetail:books[]=[]
  average=0

  //created a review instance for posting reviews into books database

  reviewmodel=new review('hemanth',"unlocking android ",'hello world',0)
  
  // constructor(private ns:NewreleasesService) { }
  // constructor(private ns:NewreleasesService) { }

  // constructor(private ns:NewreleasesService) { }

  // constructor(private ns:NewreleasesService) { }
  constructor(private bs:BookdetailService,private route:ActivatedRoute,private pr:PostreviewsService,public rs:RegisteruserService,private r:Router,private ap:AddproductstocartService){
    
  }

   
  //posting reviews into database of specific book

  onsubmit(reviews:any){
    
    this.reviewmodel.title=this.bookdetail[0].title;
    console.log(this.reviewmodel);
    // console.log(this.bookdetail[0].title)
    this.pr.postreview(this.reviewmodel).subscribe((data)=>{
      console.log(data);
     
    })
    this.reloadcurrentpage()
   
  }
  showform(){
    this.formvisible=true
  }
  
  //reloading the page after the form submission.

  reloadcurrentpage(){
    console.log("hello world")
    window.location.reload()
  }

  counter(i: number) {
    return new Array(i);
}
  
  averagerating(reviews:any){
      let total=0
    reviews.forEach((r:any) => {
        total=total+r.rating;
    });
    this.average=Math.round((total/(reviews.length)*10))/10
     
  }

  navigatetocart(){
    let cart={
      uid:this.loggeduser,
      pid:this.bookdetail[0]._id,
      title:this.bookdetail[0].title,
      price:this.bookdetail[0].price,
      qty:1,
      discount:this.bookdetail[0].discount,
    }

   this.ap.addproducts(cart).subscribe((data)=>{
     console.log(data);
     
   })
   this.r.navigate([`/addtocart`])
    
  }

 
        
  
  
  ngOnInit(){
      //  this.ns.getnewbooks().subscribe(data=>this.newreleases=data)
      //  this.title=this.route.snapshot.paramMap.get('title');
        this.route.paramMap.subscribe( (params:ParamMap)=>{
            this.title=params.get('title')
            this.bs.getbookdetail(this.title).subscribe((data)=>
            {
              this.bookdetail=data
              this.oldprice=this.bookdetail[0].price;
              this.discount=this.bookdetail[0].discount
              console.log(this.oldprice,this.discount)
              var discountprice=(this.oldprice*this.discount)/100;
             this.newprice=this.oldprice-discountprice;
             this.averagerating(this.bookdetail[0].reviews)
            })
            
            
        })

       console.log(this.rs.getuserid())
      this.loggeduser=this.rs.getuserid()
      console.log(this.loggeduser)
      
      

  }


}
