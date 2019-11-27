import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import {
  AppComponent,
  AddressIndexComponent,
  AddressShowComponent,
  AddressService,
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
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {}
