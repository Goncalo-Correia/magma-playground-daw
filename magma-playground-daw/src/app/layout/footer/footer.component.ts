import { Component } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private defaultHeight: number = 200;
  private defaultWidth: number;

  public readonly Footer_ResizeDirection = AngularResizeElementDirection.TOP;
  public data: any = {};

  ngOnInit() {
    this.defaultWidth = document.getElementById('footer').offsetWidth;
    this.data.height = this.defaultHeight;
    this.data.width = this.defaultWidth;
  }

  public onResize(evt: AngularResizeElementEvent): void {
    this.data.height = evt.currentHeightValue;
    this.data.top = evt.currentTopValue;
    this.data.left = evt.currentLeftValue;
  }
  
}
