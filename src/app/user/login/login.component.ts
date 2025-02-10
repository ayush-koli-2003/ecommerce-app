import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private userAuth:AuthService,private router:Router){
    this.loginForm=new FormGroup({
      email: new FormControl(''),
      psw: new FormControl('')
    })
    
  }

  onSubmit(){
    // const controls = this.loginForm.controls

    // for(let c in controls){
    //   if(controls[c].valid===false){
    //     alert("Invalid data in: "+c);
    //     console.log(controls[c].value);
        
    //   }
    // }
    
    // if(this.loginForm.valid){
    //   // this.userAuth.authenticateUser({email:this.loginForm.value.email,password:this.loginForm.value.psw})
    //   console.log("Form submitted");
      
    // }
    // else{
    //   alert("Not submitted")
    // }

    if(this.userAuth.authenticateUser({email:this.loginForm.value.email,password:this.loginForm.value.psw})){
      this.router.navigate(['/'])
      // console.log("Worked");
      
    }
    
  }
}
