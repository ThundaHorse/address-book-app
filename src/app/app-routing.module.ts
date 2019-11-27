import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddressIndexComponent } from "./index";

const routes: Routes = [
  { path: "addresses", component: AddressIndexComponent },
  { path: "", redirectTo: "/addresses", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
