import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string  =  'Hello Team';
  isDisabled = true;
  test = 2;
  inputText;
  today = new Date();
  fruits = []

  // user form 
  user = {};
  usersList;
  isUpdate:boolean = false;
  constructor( private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
    // this.fruits = [
    //   {fruitName:'Apple',fruitId:0},
    //   {fruitName:'Orange',fruitId:1},
    //   {fruitName:'Bannana',fruitId:2},
    // ]
  }


  // clickedMe(){
  //  alert('User Clicked Me...'+this.inputText);
  // }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((dataFromApi)=>{
      this.usersList = dataFromApi;
    })
  }

  addUser(){
    this.userService.addUser(this.user).subscribe((dataFromApi)=>{
      console.log(dataFromApi)
      this.usersList.push(dataFromApi)
      this.user = {}
    })
  }
  editUser(user){
    this.isUpdate = true;
    this.user = JSON.parse(JSON.stringify(user))
  }
  updateUser(){
    this.userService.updateUser(this.user).subscribe((dataFromApi)=>{
      console.log(dataFromApi)
      this.user = {};
      this.isUpdate = false;
      this.getAllUsers();
    })
  }
  deleteUser(user,index){
    console.log(user,index)
    this.userService.deleteUser(user['id']).subscribe((dataFromApi)=>{
      console.log(dataFromApi)
      this.usersList.splice(index,1);
    })
  }
}
