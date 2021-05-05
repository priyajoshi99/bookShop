import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  ItemsArray: any = [];

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {

    this.homeService.notifiedData(37).subscribe(res => this.ItemsArray = res)
  }

}
