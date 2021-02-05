import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})

export class MainMenuComponent {

  @Input() height: string;

  public data: any = {};

  ngOnInit() {
    this.data.height = this.height;
  }

}
