import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  public books:any="";
  constructor(  private bookSevice: BookService,
                private router:Router) { }

  ngOnInit(): void {
    this.bookSevice.getBook()
    .subscribe(
      data=>{
        this.books=data
      }
    )
  }
   delete(id:string){
     this.bookSevice.deleteBook(id).subscribe(
       ()=>alert("data deleted")
     )
   }
  update(id:string){

   this.router.navigate(['/update',id])
  }
}
