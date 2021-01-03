import { Component } from '@angular/core';
import { UserService } from './services/user.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  usersList;
  newUser = {
    id:null,
    firstName:null,
    lastName:null,
    contactNumber:null
  }
  constructor(private userService:UserService){}

  ngOnInit(){
    this.getAllUsers();
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe( (response)=>{
      this.usersList = response;
    })
  }
  saveUser(){
    if(this.newUser.id){
      this.userService.updateUser(this.newUser).subscribe((response)=>{
        console.log(response)
        this.getAllUsers();
      })
    }
    else{
      this.userService.addUser(this.newUser).subscribe((response)=>{
        console.log(response)
        this.getAllUsers();
      })
    }

    this.resetForm();
    
  }
  resetForm(){
    this.newUser = {
      id:null,
      firstName:null,
      lastName:null,
      contactNumber:null
    }
  }
  populateUserForEdit(userDetails){
    console.log(userDetails)
    this.newUser = {
      id:userDetails.id,
      firstName:userDetails.firstName,
      lastName:userDetails.lastName,
      contactNumber:userDetails.contactNumber
    }
  }
  deleteUser(user){
    this.userService.deleteUser(user.id).subscribe((response)=>{
      console.log(response)
      this.getAllUsers();
    })
  }
}
