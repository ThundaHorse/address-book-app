import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import {
  AppComponent,
  AddressIndexComponent,
  AddressShowComponent,
  AddressService,
  NavComponent
} from "./index";

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    AddressIndexComponent,
    NavComponent,
    AddressShowComponent
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule {}
