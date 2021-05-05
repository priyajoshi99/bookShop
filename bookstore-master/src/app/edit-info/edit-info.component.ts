import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from '../edit';
import { ProfileService } from '../profile.service';

interface PersonD {
  id: number;
  address: string;
  email: string;
  phone: number;
}


@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {

  constructor(private profileService: ProfileService) {}

  cars: PersonD[] = Person;
  car: any = FormGroup;

  editCar(car: PersonD) {
    this.car = new FormGroup({
      id: new FormControl(car.id),
      address: new FormControl(car.address),
      email: new FormControl(car.email),
      phone: new FormControl(car.phone)
    });
  }

  save() {
    let index = this.cars.findIndex(car => car.id === this.car.value.id);
    this.cars[index] = this.car.value; 
    this.profileService.createProfile(this.car.address,this.car.email,this.car.mobile)
    .subscribe((response:any)=>{
      console.log(response);
    })
  }

  cancel() {
    this.car = null;
  }

 /* editProfile(){
    this.profileService.createProfile('delhi','aaa@gmail.com','147852')
    .subscribe((response:any)=>{
      console.log(response);
    })
  }*/

}
