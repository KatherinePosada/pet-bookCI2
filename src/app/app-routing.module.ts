import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailComponent } from './image-details/image-details.component';


const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
