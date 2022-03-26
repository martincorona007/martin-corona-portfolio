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
import {MatCardModule} from '@angular/material/card';
import { AngularEmojisModule } from 'angular-emojis';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
const npmModules = [
  AngularEmojisModule
];
const coponents = [
  FooterComponent
];
const materialModules = [
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatDividerModule,
  MatBottomSheetModule
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
    angularModules,
    npmModules
  ],
  exports: [
    materialModules,
    angularModules,
    coponents,
    npmModules
  ],
})
export class SharedModule { }
