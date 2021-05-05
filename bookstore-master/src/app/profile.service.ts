import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private webservice : WebRequestService) { }

  createProfile(address: string, email: string, mobile: string){
    return this.webservice.post('profile', {address, email, mobile})
  }
}
