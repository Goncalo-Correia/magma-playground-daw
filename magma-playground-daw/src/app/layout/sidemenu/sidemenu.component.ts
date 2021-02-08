import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'side-menu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})

export class SideMenuComponent implements OnInit {

  @Input() sidebar_defaultWidth: number;
  @Input() sidebar_defaultHeight: number;

  private minSideMenuWidth: number = 200;
  private maxSideMenuWidth: number;

  public readonly SideMenu_ResizeDirection = AngularResizeElementDirection.RIGHT;
  public data: any = {};

  ngOnInit() {
    this.maxSideMenuWidth = window.innerWidth / 2;
    this.data.width = this.sidebar_defaultWidth;
    this.data.height = this.sidebar_defaultHeight;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.data.height = changes.sidebar_defaultHeight.currentValue;
  }

  public onResize(evt: AngularResizeElementEvent): void {
    if (evt.currentWidthValue >= this.minSideMenuWidth && evt.currentWidthValue <= this.maxSideMenuWidth) {
      this.data.width = evt.currentWidthValue;
    }
    this.data.height = evt.currentHeightValue;
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }

}
