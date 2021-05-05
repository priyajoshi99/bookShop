import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './admindashboard/adddata/adddata.component';
import { AdminComponent } from './admindashboard/admin/admin.component';
import { DeletedataComponent } from './admindashboard/deletedata/deletedata.component';
import { UpdatedataComponent } from './admindashboard/updatedata/updatedata.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContentComponent } from './content/content.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { HomeComponent } from './home/home.component';
import { NewreleasesComponent } from './newreleases/newreleases.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
   {path:'',component:ContentComponent},
   {path: 'home', component: ContentComponent},
   {path: 'edit_info', component: EditInfoComponent},
   {path: 'deals', component: HomeComponent},
   {path: 'notification', component: NotificationComponent},
  {path:"productdetails/:title",component:ProductdetailsComponent},
  {path:"categories/:name",component:CategoriesComponent},
  {path:"newreleases",component:NewreleasesComponent},
  {path:"admin",component:AdminComponent,children:[
    {path:'add',component:AdddataComponent},
    {path:'update',component:UpdatedataComponent},
    {path:'delete',component:DeletedataComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
