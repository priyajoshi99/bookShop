import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AllbooksService } from 'src/app/allbooks.service';
import { books } from 'src/app/book';
import { BookdetailService } from 'src/app/bookdetail.service';
import { DeletebooksService } from 'src/app/deletebooks.service';
import { UpdateproductService } from 'src/app/updateproduct.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {

  title=""
  bookdetail:books[]=[]
  book:any
  allbooks:books[]=[]
  p:any=1
  showform=false

  constructor(private bs:BookdetailService,private us:UpdateproductService,private ab:AllbooksService,private ds:DeletebooksService) { }

  updateProductForm=new FormGroup({

    _id:new FormControl(''), 
     title:new FormControl(''),
     isbn:new FormControl(''),
     pageCount:new FormControl(''),
     publishedDate:new FormControl(''),
     thumbnailurl:new FormControl(''),
     shortDescription:new FormControl(''),
     longDescription:new FormControl(''),
     status:new FormControl(''),
     authors:new FormControl(''),
     categories:new FormControl(''),
     price:new FormControl(''),
     currency:new FormControl(''),
     discount:new FormControl(''),
     discountunit:new FormControl('percent'),

  })
  showdata(title:any){
    this.bs.getbookdetail(title).subscribe((data)=>{
      this.bookdetail=data;
      console.log(this.bookdetail)
      this.book=this.bookdetail[0]
      this.showform=true
      this.fillform()
    })
    
    
  }

  fillform(){
    this.updateProductForm.patchValue({

      _id:this.book._id,
       title:this.book.title,
       isbn:this.book.isbn,
       pageCount:this.book.pageCount,
       publishedDate:this.book.publishedDate,
       thumbnailurl:this.book.thumbnailUrl,
       shortDescription:this.book.shortDescription,
       longDescription:this.book.longDescription,
       status:this.book.status,
       authors:this.book.authors[0],
       categories:this.book.categories[0],
       price:this.book.price,
       currency:this.book.currency,
       discount:this.book.discount
  
      })
  }

  updatedata(){

    console.log(this.updateProductForm.value)
     this.us.updatebok(this.updateProductForm.value).subscribe((data)=>{
       console.log(data);
     })
     this.reloadcurrentpage() 
  }

  search(){
    if(this.title==""){
      this.ngOnInit()
    }
    else{
      this.allbooks=this.allbooks.filter((res)=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      })
    }
  }
  deleteproduct(id:any){

    console.log(id);
    this.ds.deletebooks(id).subscribe((data)=>{
           console.log(data);
         })
        this.reloadcurrentpage()

  }
  reloadcurrentpage(){
    window.location.reload()
  }

  ngOnInit() {
    this.ab.getallbooks().subscribe((data)=>{
      console.log(data);
      this.allbooks=data;
    })
  }

}
