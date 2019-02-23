import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit {

  authors;
  constructor(service: AuthorsService) {
 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

  onclick($event){
    $event.stopPropagation();

    console.log("image was clicked.", $event);
  }

  onDivClicked(){
    console.log("Div was clicked.");
  }

  //traditional way
  /*onKeyUp($event){
    if ($event.keyCode == 13) console.log("Enter was pressed.");
  }*/
  
  onKeyUp(){
    console.log("Enter was pressed.");
  }


  logValue(name1){
    console.log(name1);
  }

  email = "me@example.com";

  oneWayBinding(){
    console.log(this.email);
  }

  twoWayBinding(){
    console.log(this.email);
  }

}
