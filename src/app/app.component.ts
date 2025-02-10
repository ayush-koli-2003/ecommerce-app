import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'group-assignment';
  role:string=''
  constructor(){
    let cred = {email:"admin@gmail.com", password:"admin"}
    localStorage.setItem("admin",JSON.stringify(cred));
    console.log(localStorage.getItem('admin'));

    let managerCred = {email:"manager@gmail.com", password:"manager"}
    localStorage.setItem("manager",JSON.stringify(managerCred));
    console.log(localStorage.getItem('manager'));
  }
}
