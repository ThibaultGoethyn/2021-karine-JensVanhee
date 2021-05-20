import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  FlexLayoutModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  LayoutModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [  
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class MaterialModule { }
