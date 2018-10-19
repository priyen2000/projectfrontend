import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule,MatProgressSpinnerModule,MatCardModule,MatSortModule,MatPaginatorModule,MatInputModule,MatTableModule,MatFormFieldModule,MatIconModule, MatSelect, MatOptionModule, MatSelectModule, MatToolbarModule, MatSidenavModule, MatListModule} from '@angular/material';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    ProductComponent,
    AddproductComponent,
    MenuComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }