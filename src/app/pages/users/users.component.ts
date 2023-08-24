import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userList: any [] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "string",
    "fullName": "string",
    "password": "string"
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get("https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers").subscribe((res: any)=>{
      this.userList = res.data;
    })
  }
  onSave() {
    this.http.post("https://freeapi.miniprojectideas.com/api/Jira/CreateUser",this.userObj).subscribe((res: any)=>{
       if(res.result) {
        alert(res.message);
        this.getAllUsers();
       } else {
        alert(res.message)
       }
    })
  }
}
