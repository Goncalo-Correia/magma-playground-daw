import { Component, Input, ViewChild } from '@angular/core';
import { MainMenuComponent } from '../mainmenu/mainmenu.component';
import { SideMenuComponent } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'layout-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {

  @ViewChild(SideMenuComponent) sideMenuComponent : SideMenuComponent;
  @ViewChild(MainMenuComponent) mainMenuComponent : MainMenuComponent;

  initializeBodyComponentDimensions(sideMenu_Width: number, sideMenu_Height : number, sideMenu_minWidth: number, sideMenu_maxWidth: number) {
    this.sideMenuComponent.initializeSideMenuComponentDimensions(sideMenu_Width, sideMenu_Height, sideMenu_minWidth, sideMenu_maxWidth);
  }

  resizeBodyComponentDimensions(sideMenu_Width: number, sideMenu_Height : number) {
    this.sideMenuComponent.resizeSideMenuComponentDimensions(sideMenu_Width, sideMenu_Height);
  }

}