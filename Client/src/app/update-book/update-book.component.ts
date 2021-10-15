import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  public selected_id:any="";
  public books:any;
  constructor(private fb:FormBuilder, private bookSevice: BookService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selected_id=id
     
    })
    
    this.bookSevice.getByIddBook(this.selected_id)
    .subscribe(
      data=>{
        this.books=data
        console.log(this.books.name)
        //console.log(data)
        this.registrationForm.setValue({
          name:this.books.name,
          author:this.books.author,
          price:this.books.price
        })
      }
    )

    console.log(this.books.name)

  }
  registrationForm=this.fb.group({
    name:[''],
    author:[''],
    price:['']
  })

  update(){

    this.bookSevice.updateByIdBook(this.books.name,this.registrationForm.value)
    .subscribe(
      data=>alert("book updated"),
      error=>alert("error")
        //console.log(data)
    )
    }
}
