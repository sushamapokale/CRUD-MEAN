import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public url1="http://localhost:3000/book/insert"
  public url2="http://localhost:3000/book"
  public url3="http://localhost:3000/book"
  constructor( private http:HttpClient) { }
  insertBook(book:any){
    return this.http.post(this.url1,book)
  }
  getBook(){
    return this.http.get(this.url2)
  }
  getByIddBook(id:string){
    return this.http.get("http://localhost:3000/book/"+id)
  }
  deleteBook(id:string){
    console.log(this.url3+'/'+id)
    return this.http.delete("http://localhost:3000/book/delete/"+id)
  }
  updateByIdBook(name:string,book:any){
    return this.http.put("http://localhost:3000/book/update/"+name,book)
  }
}
