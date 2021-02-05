import { Component, OnInit } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'side-menu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})

export class SideMenuComponent implements OnInit{

  private defaultWidth: number = 250;
  private footerDefaultHeight: number = 200;
  private windowWidth: number;
  private minSideMenuWidth: number = 50;
  private maxSideMenuWidth: number;

  public readonly SideMenu_ResizeDirection = AngularResizeElementDirection.RIGHT;
  public data: any = {};

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.maxSideMenuWidth = this.windowWidth / 2;
    this.data.width = this.defaultWidth;
    this.data.height = document.getElementById('layout-menu-container').offsetHeight - this.footerDefaultHeight;
  }

  public onResize(evt: AngularResizeElementEvent): void {
    if (evt.currentWidthValue >= this.minSideMenuWidth && evt.currentWidthValue <= this.maxSideMenuWidth) {
      this.data.width = evt.currentWidthValue;
    }
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }

}
