import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddressIndexComponent, AddressDetailsComponent } from "./index";

const routes: Routes = [
  { path: "addresses", component: AddressIndexComponent },
  { path: "addresses/:id", component: AddressDetailsComponent },
  { path: "", redirectTo: "/addresses", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
