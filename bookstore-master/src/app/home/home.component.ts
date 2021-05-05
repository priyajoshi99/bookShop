import { Component, OnInit } from '@angular/core';
import { filter, map, observeOn } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HomeService } from '../home.service';
import { books } from '../book';
import { NewreleasesComponent } from '../newreleases/newreleases.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  /** Based on the screen size, switch from standard to one column per row */
  ItemsArray: any = [];

  constructor(private homeService: HomeService, private route : Router) { }

  navigateTo(val:any){
    this.route.navigate([`productdetails/${val}`])
  }

  ngOnInit() {

    this.homeService.filterData(20).subscribe(res => this.ItemsArray = res)


    //this.homeService.getData().
     //subscribe(res => this.ItemsArray = res);

   // this.homeService.getData().subscribe((res: books[])=>{
     // if(this.ItemsArray.discount > 15)
       //  this.ItemsArray= res;
  //  })  
  }
}


