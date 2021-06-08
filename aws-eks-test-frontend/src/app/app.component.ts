import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputName = '';
  responseMsg = '';

  constructor(private http: HttpClient) { }

  submitName() {
    console.log("Getting backend service details");
    this.http.get<any>('assets/runtime.json').subscribe(metadata => {
      console.log(metadata.BACKEND_SERVICE_URL);
      console.log("Submitting name: "+this.inputName+" to backend service");
      const tempUrl = metadata.BACKEND_SERVICE_URL+"?name="+this.inputName;
      this.http.get<any>(tempUrl).subscribe(data => {
        console.log(data);
        this.responseMsg = data.message;
      });
    });
  }
}
