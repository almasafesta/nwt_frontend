import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from '../../shared/rest-api.service';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
    star5:any;
    star4:any;
    star3:any;
    star2:any;
    star1:any;
    reviewSubmit:any;
  constructor(private api: RestApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  add(){
      console.log(this.star5, this.star4, this.star3, this.star2, this.star1, 'ovo je')
      if(this.star5!=null){
          this.reviewSubmit={
              rating:this.star5
          }
      }
      else if(this.star4!=null){
        this.reviewSubmit={
            rating:this.star4
        }
    }else if(this.star3!=null){
        this.reviewSubmit={
            rating:this.star3
        }
    }else if(this.star2!=null){
        this.reviewSubmit={
            rating:this.star2
        }
    }else if(this.star1!=null){
        this.reviewSubmit={
            rating:this.star1
        }
    }
    this.api.post('/', this.reviewSubmit).subscribe(() => {
        this.toastr.success("added");
      });
      
  }

}
