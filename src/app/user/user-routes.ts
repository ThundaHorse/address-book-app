import { Routes } from "@angular/router";
import { ProfileComponent, LoginComponent, LogoutComponent } from "../index";

export const userRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent },
  { path: "logout", component: LogoutComponent }
];
