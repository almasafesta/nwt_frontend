import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  path:string;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params=>{
      console.log("params",params);
    })
    this.router.url.subscribe(value=>{
      this.path=value[0].path;
    });
  }

}
