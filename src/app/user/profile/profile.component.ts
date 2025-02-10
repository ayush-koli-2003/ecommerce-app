import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../interfaces/user.model';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  currUser :Array<any>
  constructor(private authService:AuthService){
    let u:{email:string,role:string};

    u = authService.getUserInfo();
    this.currUser = [];
    this.currUser.push(u);
  }
}
