import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { NewreleasesService } from './newreleases.service';
import { BookdetailService } from './bookdetail.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesbooksService } from './categoriesbooks.service';
import { RatingtestComponent } from './ratingtest/ratingtest.component';
import { NewreleasesComponent } from './newreleases/newreleases.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './admindashboard/admin/admin.component';
import { AdddataComponent } from './admindashboard/adddata/adddata.component';
import { UpdatedataComponent } from './admindashboard/updatedata/updatedata.component';
import { DeletedataComponent } from './admindashboard/deletedata/deletedata.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { NotificationComponent } from './notification/notification.component';







@NgModule({
  declarations: [
    AppComponent,
    ProductdetailsComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CategoriesComponent,
    RatingtestComponent,
    NewreleasesComponent,
    AdminComponent,
    AdddataComponent,
    UpdatedataComponent,
    DeletedataComponent,
    NavComponent,
    HomeComponent,
    EditInfoComponent,
    NotificationComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [NewreleasesService,BookdetailService,CategoriesbooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
