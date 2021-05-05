import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { books } from '../book';
import { NewreleasesService } from '../newreleases.service';

@Component({
  selector: 'app-newreleases',
  templateUrl: './newreleases.component.html',
  styleUrls: ['./newreleases.component.css']
})
export class NewreleasesComponent implements OnInit {

  constructor(private ns:NewreleasesService,private routes:Router) { }
  newrelease:books[]=[]

  navigateto(val:any){
    console.log(val);
     this.routes.navigate([`productdetails/${val}`])
}
  

  ngOnInit() {

    this.ns.getnewbooks().subscribe((data)=>{
        this.newrelease=data;
    })

  }

}
