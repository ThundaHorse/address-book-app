import { Component } from "@angular/core";
import { AuthService } from "src/app/common/auth.service";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  email;
  password;
  mouseOverLogIn;

  constructor(private auth: AuthService) {}

  logIn(formValues) {
    this.auth.logUserIn(formValues.email, formValues.password);
    this.auth.isAuth();
  }
}
