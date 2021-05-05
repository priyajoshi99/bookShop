import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch=faSearch
  faShoppingCart=faShoppingCart

  value:any
  html:any
  constructor(private route:Router) { }

  callkeyup(){
    this.getdata()
  }

  //searching the list of books based on author name and title name

  async getdata(){
    console.log(this.value);
    const res=await fetch("http://localhost:3000/books");
    const books=await res.json();
    console.log(books);
    let result=books.filter((book: { title: string; authors: any[]; })=>{
      const regex=new RegExp(`^${this.value}`,'gi');
      return  book.title.match(regex) || book.authors.find(auth=>auth.match(regex));
  })
  console.log(result)
  if(this.value.length==0){
      result=[];
  }
  this.listofbooks(result)
  }

  //adding the books list to html

  listofbooks(output:any){
    const list= output.map((book: { title: any; })=>
      `<div>${book.title}</div>`
   ).join('')
   console.log(list); 
   this.html=list;
       
  }

 //navigation to product details page
  navigateto(){
       this.route.navigate([`productdetails/${this.value}`])
       
       
  }

//navigating to specific book categories

  navigatecategories(name:any){
    this.route.navigate(['/categories',name])
  }
  
  ngOnInit(): void {
    
  }
 
     
  


}


