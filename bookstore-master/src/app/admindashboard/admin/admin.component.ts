import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  adddata(){
    this.router.navigate(['add'],{relativeTo:this.route})
  }

  updateform(){
    this.router.navigate(['update'],{relativeTo:this.route})
  }

  delete(){
    this.router.navigate(['delete'],{relativeTo:this.route})
  }

  ngOnInit(): void {
  }

}
