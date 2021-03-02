import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})
export class FooterComponent implements OnInit {

  private footer_Width: number;
  private footer_Height: number;
  private minFooterHeight: number = 200;
  private maxFooterHeight: number;
  
  @Output() footerResizeEvent = new EventEmitter<number>();

  public readonly Footer_ResizeDirection = AngularResizeElementDirection.TOP;
  public data: any = {};

  ngOnInit() {
    this.maxFooterHeight = window.innerHeight / 2;
  }

  setFooterComponentDimensions(footer_Width: number, footer_Height : number) {
    this.footer_Width = footer_Width;
    this.footer_Height = footer_Height;
    this.setComponentDimensions();
  }

  onResize(evt: AngularResizeElementEvent): void {
    if (evt.currentHeightValue >= this.minFooterHeight && evt.currentHeightValue <= this.maxFooterHeight) {
      this.data.height = evt.currentHeightValue;
      this.triggerFooterResizeEvent(this.data.height);
    }
    this.data.width = evt.currentWidthValue;
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }

  triggerFooterResizeEvent(footerHeight: number) {
    this.footerResizeEvent.emit(footerHeight);
  }

  private setComponentDimensions() {
    this.data.width = this.footer_Width;
    this.data.height = this.footer_Height;
  }

}
