import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getAllUsers(){
    return this.http.get(environment.appUrl + 'users');
  }
  addUser(user){
    return this.http.post(environment.appUrl + 'users',user);
  }
  updateUser(user){
    return this.http.put(environment.appUrl + `users/${user.id}`,user);
  }
  deleteUser(userId){
    return this.http.delete(environment.appUrl + `users/${userId}`);
  }

}
