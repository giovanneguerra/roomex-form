import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  user: Profile

  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state as Profile;
  }

  ngOnInit(): void {
  }

}
