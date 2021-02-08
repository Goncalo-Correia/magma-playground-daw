import { Component, OnInit } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'magma-playground-daw';

  /* ---- layout ----- */
  sidebar_defaultWidth: number;
  sidebar_defaultHeight: number;
  footer_defaultWidth: number;
  footer_defaultHeight: number;

  ngOnInit() {
    this.sidebar_defaultWidth = 200;
    this.footer_defaultHeight = 200;
    this.sidebar_defaultHeight = document.getElementById('layout-menu-container').offsetHeight - this.footer_defaultHeight;
    this.footer_defaultWidth = document.getElementById('footer').offsetWidth;
  }

  footerResizeEventHandler(footerHeight: number) {
    this.sidebar_defaultHeight = (document.getElementById('layout-menu-container').offsetHeight + this.footer_defaultHeight) - footerHeight;
    this.footer_defaultHeight = footerHeight;
    console.log(document.getElementById('layout-flex-container').offsetHeight)
  }

}
