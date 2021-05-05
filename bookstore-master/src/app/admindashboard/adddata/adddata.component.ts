import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AddproductService } from 'src/app/addproduct.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private ap:AddproductService) { }

  addProductForm=new FormGroup({

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

  showvalue(){
    console.log(this.addProductForm.value)
     this.ap.addNewBook(this.addProductForm.value).subscribe(data=>console.log("success",data))
     this.reloadcurrentpage()

  }

  reloadcurrentpage(){
    console.log("hello world")
    window.location.reload()
  }


  ngOnInit(): void {
  }

}
