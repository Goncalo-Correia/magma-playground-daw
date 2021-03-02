import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'side-menu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})

export class SideMenuComponent implements OnInit {

  private sideMenu_Width: number;
  private sideMenu_Height: number;
  private minSideMenu_Width: number = 200;
  private maxSideMenu_Width: number;

  public readonly SideMenu_ResizeDirection = AngularResizeElementDirection.RIGHT;
  public data: any = {};

  ngOnInit() {
    this.maxSideMenu_Width = window.innerWidth / 2;
  }

  setSideMenuComponentDimensions(sideMenu_Width: number, sideMenu_Height : number) {
    this.sideMenu_Width = sideMenu_Width;
    this.sideMenu_Height = sideMenu_Height;
    this.setComponentDimensions();
  }

  onResize(evt: AngularResizeElementEvent): void {
    if (evt.currentWidthValue >= this.minSideMenu_Width && evt.currentWidthValue <= this.maxSideMenu_Width) {
      this.data.width = evt.currentWidthValue;
    }
    this.data.height = evt.currentHeightValue;
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }

  private setComponentDimensions() {
    this.data.width = this.sideMenu_Width;
    this.data.height = this.sideMenu_Height;
  }

}
