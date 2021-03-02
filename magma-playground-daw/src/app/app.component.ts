import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularResizeElementDirection, AngularResizeElementEvent } from 'angular-resize-element';
import { cwd } from 'process';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'magma-playground-daw';

  /* ---- layout ----- */
  sidebar_defaultWidth: number;
  sidebar_defaultHeight: number;
  footer_defaultWidth: number;
  footer_defaultHeight: number;

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  @ViewChild(HeaderComponent) headerComponent : HeaderComponent;
  @ViewChild(BodyComponent) bodyComponent : BodyComponent;
  @ViewChild(FooterComponent) footerComponent : FooterComponent;

  ngOnInit() {
    this.bindWindowResizeEvent();
  }
  
  ngAfterViewInit() {
    this.initializeLayoutDimensions();
  }

  footerResizeEventHandler(footerHeight: number) {
    this.sidebar_defaultHeight = (document.getElementById('layout-menu-container').offsetHeight + this.footer_defaultHeight) - footerHeight;
    this.footer_defaultHeight = footerHeight;
    this.resizeLayoutDimensions();
  }

  private initializeLayoutDimensions() {
    this.sidebar_defaultWidth = 200;
    this.footer_defaultHeight = 200;
    this.sidebar_defaultHeight = document.getElementById('layout-menu-container').offsetHeight - this.footer_defaultHeight;
    this.footer_defaultWidth = document.getElementById('footer').offsetWidth;

    this.setChildComponentsDimensions();
  }

  private resizeLayoutDimensions() {
    this.sidebar_defaultWidth = 200;
    this.footer_defaultHeight = 200;
    this.sidebar_defaultHeight = document.getElementById('layout-menu-container').offsetHeight - this.footer_defaultHeight;
    this.footer_defaultWidth = document.getElementById('footer').offsetWidth;
    
    this.setChildComponentsDimensions();
  }

  private setChildComponentsDimensions() {
    this.bodyComponent.setBodyComponentDimensions(this.sidebar_defaultWidth, this.sidebar_defaultHeight);
    this.footerComponent.setFooterComponentDimensions(this.footer_defaultWidth, this.footer_defaultHeight);
  }

  private bindWindowResizeEvent() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.resizeLayoutDimensions();
    })
  }

}
