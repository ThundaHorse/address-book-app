import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: ``,
  styles: [``]
})
export class LogoutComponent implements OnInit {
  constructor(router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("signedIn")) {
      localStorage.removeItem("signedIn");
    }
  }
}
