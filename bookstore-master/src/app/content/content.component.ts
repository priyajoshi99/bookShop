import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { books } from '../book';
import { CategoriesbooksService } from '../categoriesbooks.service';
import { NewreleasesService } from '../newreleases.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  faShoppingCart=faShoppingCart
  newreleases:books[]=[]
  pbooks:books[]=[]
  dsbooks:books[]=[]

  constructor(private ns:NewreleasesService,private cs:CategoriesbooksService) { }

  ngOnInit(){
    this.ns.getnewbooks().subscribe((data)=>{
       data.splice(3,6);
       console.log(data);
       this.newreleases=data;
    })

    this.cs.getbooksbycategories("Programming").subscribe((data)=>{

      data.splice(3,(data.length)-4)
      this.pbooks=data;

    })

    this.cs.getbooksbycategories("Data Science").subscribe((data)=>{
      data.splice(3,(data.length)-4)
      this.dsbooks=data;
    })
    
  }

}
