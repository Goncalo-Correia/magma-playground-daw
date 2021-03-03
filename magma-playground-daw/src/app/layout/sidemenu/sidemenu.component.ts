import { Component } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'side-menu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})

export class SideMenuComponent {

  private sideMenu_width: number;
  private sideMenu_height: number;
  private sideMenu_minWidth: number;
  private sideMenu_maxWidth: number;

  public readonly SideMenu_ResizeDirection = AngularResizeElementDirection.RIGHT;
  public data: any = {};

  initializeSideMenuComponentDimensions(sideMenu_Width: number, sideMenu_Height : number, sideMenu_minWidth: number, sideMenu_maxWidth: number) {
    this.sideMenu_width = sideMenu_Width;
    this.sideMenu_minWidth = sideMenu_minWidth;
    this.sideMenu_maxWidth = sideMenu_maxWidth;
    this.sideMenu_height = sideMenu_Height;
    this.setComponentDimensions();
  }

  resizeSideMenuComponentDimensions(sideMenu_Width: number, sideMenu_Height : number) {
    this.sideMenu_width = sideMenu_Width;
    this.sideMenu_height = sideMenu_Height;
    this.setComponentDimensions();
  }
  
  private setComponentDimensions() {
    this.data.width = this.sideMenu_width;
    this.data.height = this.sideMenu_height;
  }

  onResize(evt: AngularResizeElementEvent): void {
    if (evt.currentWidthValue >= this.sideMenu_minWidth && evt.currentWidthValue <= this.sideMenu_maxWidth) {
      this.data.width = evt.currentWidthValue;
    }
    this.data.height = evt.currentHeightValue;
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }

}
