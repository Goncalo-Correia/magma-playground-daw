import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '/node_modules/angular-resize-element/bundles/style.scss']
})
export class FooterComponent implements OnInit {

  @Input() footer_defaultWidth: number;
  @Input() footer_defaultHeight: number;

  @Output() footerResizeEvent = new EventEmitter<number>();
  
  private minFooterHeight: number = 200;
  private maxFooterHeight: number;

  public readonly Footer_ResizeDirection = AngularResizeElementDirection.TOP;
  public data: any = {};

  ngOnInit() {
    this.maxFooterHeight = window.innerHeight / 2;
    this.data.height = this.footer_defaultHeight;
    this.data.width = this.footer_defaultWidth;
  }

  public onResize(evt: AngularResizeElementEvent): void {
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

}
