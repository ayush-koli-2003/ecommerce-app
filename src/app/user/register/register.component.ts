import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;

  constructor(private userAuth:AuthService,private router:Router){
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      psw:new FormControl('')
    })
  }

  checkFormData(){
    let u:any = {name:this.registerForm.value.name,age:parseInt(this.registerForm.value.age),email:this.registerForm.value.email,password:this.registerForm.value.psw}
    this.userAuth.registerUser(u);
    this.router.navigate(['login'])
  }
}
