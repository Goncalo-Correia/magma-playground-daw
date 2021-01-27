import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  private sideMenuId = "side-menu";
  private resizeMenuId = "resize-menu";
  private mainMenuId = "main-menu";
  private bodyComponentId = "layout-menu-container";

  private totalWidth;
  private mainMenuWidth;
  private sideMenuWidth = 250;
  private resizeMenuWidth = 10;

  ngOnInit() {
    this.initializeBodyComponent();
  }

  private initializeBodyComponent() {
    this.totalWidth = document.getElementById(this.bodyComponentId).offsetWidth;
    this.mainMenuWidth = this.totalWidth - (this.sideMenuWidth + this.resizeMenuWidth);

    document.getElementById(this.sideMenuId).style.width = this.sideMenuWidth + "px";
    document.getElementById(this.resizeMenuId).style.width = this.resizeMenuWidth + "px";
    document.getElementById(this.mainMenuId).style.width = this.mainMenuWidth + "px";
  }
}