import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({ 
  declarations: [
    AppComponent,
  ],
  imports: [
    LandingModule,
    SharedModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
