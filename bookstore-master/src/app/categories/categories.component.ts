import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { books } from '../book';
import { CategoriesbooksService } from '../categoriesbooks.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  name:any
  bookcategories:books[]=[]
  constructor(private route:ActivatedRoute,private cs:CategoriesbooksService,private routes:Router) { 
    
  }
  navigateto(val:any){
        console.log(val);
         this.routes.navigate([`productdetails/${val}`])
  }

  ngOnInit() {
    // this.name=this.route.snapshot.paramMap.get('name');
    this.route.paramMap.subscribe((params:ParamMap)=>{
         this.name=params.get('name')
         this.cs.getbooksbycategories(this.name).subscribe(data=>this.bookcategories=data)
        console.log(this.bookcategories)
    })
    
  }

}
