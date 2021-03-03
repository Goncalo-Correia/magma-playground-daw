import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})
export class FooterComponent {

  private footer_width: number;
  private footer_height: number;
  private footer_minHeight: number;
  private footer_maxHeight: number;
  
  @Output() footerResizeEvent = new EventEmitter<number>();

  public readonly Footer_ResizeDirection = AngularResizeElementDirection.TOP;
  public data: any = {};

  initializeFooterComponentDimensions(footer_width: number, footer_height : number, footer_minHeight: number, footer_maxHeight: number) {
    this.footer_width = footer_width;
    this.footer_minHeight = footer_minHeight;
    this.footer_maxHeight = footer_maxHeight;
    this.footer_height = footer_height;
    this.setComponentDimensions();
  }

  resizeFooterComponentDimensions(footer_width: number, footer_height : number) {
    this.footer_height = footer_height;
    this.footer_width = footer_width;
    this.setComponentDimensions();
  }

  private setComponentDimensions() {
    this.data.width = this.footer_width;
    this.data.height = this.footer_height;
  }

  onResize(evt: AngularResizeElementEvent): void {
    if (evt.currentHeightValue >= this.footer_minHeight && evt.currentHeightValue <= this.footer_maxHeight) {
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

}
