import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { BookService } from '../book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private fb:FormBuilder, private bookSevice: BookService) { }

  ngOnInit(): void {
  }
  registrationForm=this.fb.group({
    name:[''],
    author:[''],
    price:['']
  })
  Onsubmit(){
    console.log(this.registrationForm.value)
    this.bookSevice.insertBook(this.registrationForm.value)
    .subscribe(
      data=>alert("data insered"),
      error=>alert("error"),
    
      )
      this.registrationForm.setValue({
        name:'',
        author:'',
        price:''
      })
  }

}
