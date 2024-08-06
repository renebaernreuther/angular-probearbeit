import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';

  constructor(private httpClient: HttpClient) {
    this.httpClient.post<any>("http://localhost:9002/login", {"username":"max.muster", "password":"Anmeldung1"}).subscribe((response) => {
      console.log(response);
      let headers = new HttpHeaders();
      headers = headers.set('token', response.token);
      this.httpClient.get("http://localhost:9002/todo/1", {headers}).subscribe(console.log);
    })
  }


}
