import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) { }

  //get all users
  getAllUsers(){
    return this.httpClient.get( environment.appUrl +  'users' );
  }
  // add user
  addUser(userData){
    return this.httpClient.post(environment.appUrl + 'users',userData);
  }
  // update user
  updateUser(userData){
    return this.httpClient.put(environment.appUrl + `users/${userData['id']}`,userData)
  }
  //delete user
  deleteUser(userId){
    return this.httpClient.delete(environment.appUrl + `users/${userId}`)
  }
}
