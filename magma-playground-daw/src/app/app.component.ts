import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Project } from './api/models/project.model';
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

  /* ----- layout ----- */
  private window_defaultHeight: number;
  private window_defaultWidth: number;

  private header_defaultWidth: number;
  private header_defaultHeight: number;

  private sideMenu_defaultWidth: number;
  private sideMenu_defaultHeight: number;
  private sideMenu_minWidth: number = 200;
  private sideMenu_maxWidth: number;

  private footer_defaultWidth: number;
  private footer_defaultHeight: number;
  private footer_minHeight: number = 200;
  private footer_maxHeight: number;

  private padding_defaut: number = 20;

  private resizeObservable$: Observable<Event>;
  private resizeSubscription$: Subscription;

  @ViewChild(HeaderComponent) headerComponent : HeaderComponent;
  @ViewChild(BodyComponent) bodyComponent : BodyComponent;
  @ViewChild(FooterComponent) footerComponent : FooterComponent;

  /* ----- project ----- */

  private project: Project;


  ngOnInit() {
    this.bindWindowResizeEvent();
    this.calculateChildComponentMaximumDimensions();
  }
  
  ngAfterViewInit() {
    this.initializeLayoutDimensions();
  }

  /* ---------- Layout Start ---------- */

  footerResizeEventHandler(footerHeight: number) {
    this.sideMenu_defaultHeight = (document.getElementById('layout-menu-container').offsetHeight + this.footer_defaultHeight) - footerHeight;
    this.footer_defaultHeight = footerHeight;
    this.resizeLayoutDimensions();
  }

  private initializeLayoutDimensions() {
    this.sideMenu_defaultWidth = 200;
    this.footer_defaultHeight = 200;
    this.window_defaultWidth = window.innerWidth;
    this.window_defaultHeight = window.innerHeight;
    this.header_defaultWidth = document.getElementById('layout-header').offsetWidth;
    this.header_defaultHeight = document.getElementById('layout-header').offsetHeight;
    this.sideMenu_defaultHeight = document.getElementById('layout-menu-container').offsetHeight - this.footer_defaultHeight;
    this.footer_defaultWidth = document.getElementById('layout-footer').offsetWidth;
    this.initializeChildComponentsDimensions();
  }

  private resizeLayoutDimensions() {
    this.calculateChildComponentMaximumDimensions();
    this.window_defaultWidth = window.innerWidth;
    this.window_defaultHeight = window.innerHeight;
    this.sideMenu_defaultHeight = this.window_defaultHeight - (this.header_defaultHeight + this.footer_defaultHeight + this.padding_defaut);
    this.footer_defaultWidth = this.window_defaultWidth - this.padding_defaut;
    this.resizeChildComponentsDimensions();
  }

  private initializeChildComponentsDimensions() {
    this.bodyComponent.initializeBodyComponentDimensions(this.sideMenu_defaultWidth, this.sideMenu_defaultHeight, this.sideMenu_minWidth, this.sideMenu_maxWidth);
    this.footerComponent.initializeFooterComponentDimensions(this.footer_defaultWidth, this.footer_defaultHeight, this.footer_minHeight, this.footer_maxHeight);
  }

  private resizeChildComponentsDimensions() {
    this.bodyComponent.resizeBodyComponentDimensions(this.sideMenu_defaultWidth, this.sideMenu_defaultHeight);
    this.footerComponent.resizeFooterComponentDimensions(this.footer_defaultWidth, this.footer_defaultHeight);
  }

  private calculateChildComponentMaximumDimensions() {
    this.sideMenu_maxWidth = window.innerWidth / 2;
    this.footer_maxHeight = window.innerHeight / 2;
  }

  private bindWindowResizeEvent() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.resizeLayoutDimensions();
    })
  }

  /* ---------- Layout End ---------- */

  /* ---------- Project Start ---------- */


  /* ---------- Project End ---------- */

}
