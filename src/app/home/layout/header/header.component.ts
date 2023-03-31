import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {

  toggleMobileMenu() {
    const hamburgerMenu = $("#hamburger-menu");
    if (hamburgerMenu.hasClass("hidden")) {
      hamburgerMenu.removeClass("hidden").addClass("fixed");
    } else {
      hamburgerMenu.removeClass("flex").addClass("hidden");
    }
  }

  close(){
    const hamburgerMenu = $("#hamburger-menu");
    hamburgerMenu.removeClass("flex").addClass("hidden");
  }


}
