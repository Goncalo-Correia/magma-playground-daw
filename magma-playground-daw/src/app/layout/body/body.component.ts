import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {

  @Input() sidebar_defaultWidth: number;
  @Input() sidebar_defaultHeight: number;

}