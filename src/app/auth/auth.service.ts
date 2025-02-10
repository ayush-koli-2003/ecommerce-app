import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged:boolean;
  role:string='customer';
  userList:Array<User>=[];
  email:string;
  constructor() { 
    this.isLogged=false;
    this.role=Role.customer;
    localStorage.setItem('isLogged','false');
    this.email=""
  }

  login(role:Role){
    this.isLogged= true;
    localStorage.setItem('isLogged','true');
    this.role = Role[role];
    localStorage.setItem('role',JSON.stringify(Role[role]));
  }

  registerUser(u:User){
    console.log(u);
    
    this.userList.push(u);

    localStorage.setItem('users',JSON.stringify(this.userList))
  }
  
  authenticateUser(u:{email:string,password:string}){
    
    if(localStorage.getItem('admin')!==null){
      let data = (localStorage.getItem('admin') as string);
      let adminData = JSON.parse(data);
      if((adminData  as unknown as {email:string,password:string}).email === u.email){

        if((adminData  as unknown as {email:string,password:string}).password===u.password){
          this.email = u.email;
          localStorage.setItem('currRole','admin');
          this.role = localStorage.getItem('currRole') as string;
          console.log(localStorage.getItem('currRole'));
          this.login(Role.admin)
          return true;
        }
        else{
          alert("Wrong credentials");
          return false;
        }
      }
      
    }

    if(localStorage.getItem('manager')!==null){
      let data = (localStorage.getItem('manager') as string);
      let managerData = JSON.parse(data);
      if((managerData  as unknown as {email:string,password:string}).email === u.email){

        if((managerData  as unknown as {email:string,password:string}).password===u.password){
          this.email = u.email;
          localStorage.setItem('currRole','manager');
          this.role = localStorage.getItem('currRole') as string;
          console.log(localStorage.getItem('currRole'));
          this.login(Role.manager)
          return true;
        }
        else{
          alert("Wrong credentials");
          return false;
        }
      }
      
    }

    if(localStorage.getItem('users')!==null){
      let list = JSON.parse(localStorage.getItem('users') as string);
      console.log(list as Array<User>);
      for(let i=0;i<list.length;i++){
        if(list[i].email===u.email){
          if(list[i].password===u.password){
            this.email = u.email;
            localStorage.setItem('currRole','user');
            this.role = localStorage.getItem('currRole') as string;
            console.log(localStorage.getItem('currRole'));
            this.login(Role.customer)
            return true;
          }
          else{
            alert("Wrong credentials")
            return false;
          }
        }
      }
    }
    

    alert("No user with email")
    return false;
  }

  getUserInfo(){
    return {email:this.email,role:this.role}
  }

}
