import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteruserService } from 'src/app/registeruser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastname:new FormControl('',[Validators.required ,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  constructor(private rs:RegisteruserService) { }

  postdata(){
    console.log(this.registerForm.value)
    this.rs.reigsteruser(this.registerForm.value).subscribe((data)=>{
      console.log(data);
      localStorage.setItem('token',data.token)
    })
  }

 

  ngOnInit(): void {
  }

}
