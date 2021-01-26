import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainMenuComponent } from './layout/mainmenu/mainmenu.component';
import { SideMenuComponent } from './layout/sidemenu/sidemenu.component';
import { ResizeMenuComponent } from './layout/resizemenu/resizemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MainMenuComponent,
    SideMenuComponent,
    ResizeMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
