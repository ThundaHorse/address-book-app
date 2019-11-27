import { Routes } from "@angular/router";
import { ProfileComponent, LoginComponent } from "../index";

export const userRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent }
];
