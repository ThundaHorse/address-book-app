import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "../user/user.model";

@Injectable()
export class AuthService {
  currentUser: IUser = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "",
    password: ""
  };
  testUser: IUser = {
    firstName: "First name",
    lastName: "Last name",
    email: "p",
    password: "p"
  };

  constructor(private router: Router) {}

  logUserIn(email: string, password: string) {
    this.currentUser.email = email;
    this.currentUser.password = password;
  }

  isAuth() {
    if (
      this.currentUser.email === this.testUser.email &&
      this.currentUser.password === this.testUser.password
    ) {
      localStorage.setItem("signedIn", "true");
      this.router.navigate(["user/profile"]);
    } else {
      alert("Incorrect email or password.");
    }
  }
}
