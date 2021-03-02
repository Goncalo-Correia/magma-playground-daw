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

  setBodyComponentDimensions(sideMenu_Width: number, sideMenu_Height : number) {
    this.sideMenuComponent.setSideMenuComponentDimensions(sideMenu_Width, sideMenu_Height);
  }

}