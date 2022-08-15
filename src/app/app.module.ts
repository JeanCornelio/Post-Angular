import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ModalComponent } from './components/modal/modal.component';
import { CategoryMaintenanceComponent } from './pages/category-maintenance/category-maintenance.component';

import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { BtnAddComponent } from './components/btn-add/btn-add.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PostComponent } from './pages/post/post.component';
import { NavComponent } from './components/nav/nav.component';
import { CategorySelectedModalComponent } from './components/category-selected-modal/category-selected-modal.component';
import { PostModalComponent } from './pages/post/post-modal/post-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FilterComponent,
    PaginatorComponent,
    ModalComponent,
    CategoryMaintenanceComponent,
    CardComponent,
    BtnAddComponent,
    PostComponent,
    NavComponent,
    CategorySelectedModalComponent,
    PostModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
