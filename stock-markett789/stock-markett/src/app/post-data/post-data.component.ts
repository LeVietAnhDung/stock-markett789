import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    const body = {
      "name": "Last Stock Company",
      "code": "LSC",
      "price": 876,
      "previousPrice": 765,
      "exchange": "NYSE",
      "favorite": false
    };

    this.httpService.postStock(body).subscribe((data) => {
      console.log('postStock', data);
    });
  }

}