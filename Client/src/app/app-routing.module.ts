import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
const routes: Routes = [
  {path:'addbook',component:AddBookComponent},
  {path:'viewbook',component: ViewBookComponent},
  {path:'update/:id',component:UpdateBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
