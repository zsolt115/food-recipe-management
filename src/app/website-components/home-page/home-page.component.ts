import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user$ = this.authService.userStatus$;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

}
