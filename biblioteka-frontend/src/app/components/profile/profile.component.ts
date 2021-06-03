import { Component, OnInit } from '@angular/core';
import { ProfileService } from './shared/profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(service: ProfileService) { }

  ngOnInit(): void {
  }

}
