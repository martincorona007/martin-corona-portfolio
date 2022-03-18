import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
const coponents = [
  FooterComponent
];
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  
];
const angularModules = [
  FormsModule,
  FlexLayoutModule,
  BrowserAnimationsModule,
  BrowserModule,
];

@NgModule({
  
  declarations: [
    coponents
  ],
  imports: [
    CommonModule,
    materialModules,
    angularModules
  ],
  exports: [
    materialModules,
    angularModules,
    coponents
  ],
})
export class SharedModule { }
