import { Component, OnInit } from '@angular/core';
import { books } from 'src/app/book';
import { BookdetailService } from 'src/app/bookdetail.service';
import { DeletebooksService } from 'src/app/deletebooks.service';

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.css']
})
export class DeletedataComponent implements OnInit {

  hide=false
  bookdetail:books[]=[]
  book:any

  title=""
  constructor(private bs:BookdetailService,private ds:DeletebooksService) { }

  showdata(){
    this.bs.getbookdetail(this.title).subscribe((data)=>{
      this.bookdetail=data;
      console.log(this.bookdetail)
      this.book=this.bookdetail[0]
     this.hide=true
    })
  }

  deleteproduct(){

    this.ds.deletebooks(this.book._id).subscribe((data)=>{
           console.log(data);
         })
        this.reloadcurrentpage()

  }

  reloadcurrentpage(){
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
