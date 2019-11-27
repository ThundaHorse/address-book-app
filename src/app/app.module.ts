import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import {
  AppComponent,
  AddressIndexComponent,
  AddressShowComponent,
  AddressService,
  AuthService,
  NavComponent,
  AddressDetailsComponent
} from "./index";

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    AddressDetailsComponent,
    AddressIndexComponent,
    NavComponent,
    AddressShowComponent
  ],
  providers: [AuthService, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {}
