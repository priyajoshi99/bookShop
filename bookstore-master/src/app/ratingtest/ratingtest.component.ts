import { Component, OnInit } from '@angular/core';
import { books } from '../book';
import { BookdetailService } from '../bookdetail.service';

@Component({
  selector: 'app-ratingtest',
  templateUrl: './ratingtest.component.html',
  styleUrls: ['./ratingtest.component.css']
})
export class RatingtestComponent implements OnInit {

  bookdetail:books[]=[]



  starPercentageRounded:string=""
   starsTotal = 5;
   rating=0

   getRatings(){
    
      // Get percentage
      const starPercentage = (this.rating/ this.starsTotal) * 100;

      // Round to nearest 10
       this.starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      console.log(this.starPercentageRounded)
   
   }

  constructor(private bs:BookdetailService) { }

  ngOnInit() {
        this.bs.getbookdetail("Hello! Flex 4").subscribe((data)=>{
          this.bookdetail=data;
          console.log(this.bookdetail);
          this.rating=this.bookdetail[0].reviews[1].rating
        }
       )
        

  }

}
