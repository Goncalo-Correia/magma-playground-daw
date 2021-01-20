import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component'
import { BodyComponent } from './layout/body/body.component'
import { FooterComponent } from './layout/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
