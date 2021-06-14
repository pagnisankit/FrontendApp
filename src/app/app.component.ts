import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Multiple Choice Questions';
  users : any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get("http://localhost:52428/api/Exam").subscribe(response=>{
      this.users=response;
    }, error => {
      console.log(error);
    })
  }

}
