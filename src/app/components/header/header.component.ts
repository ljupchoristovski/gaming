import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/directives/unsubscribe.component';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  userInfo: any;
  cookieValue: string = '';
  constructor(private _cookieService: CookieService, private _communicationService: CommunicationService) {
    super();
  }

  ngOnInit(): void {
    this.cookieValue = this._cookieService.get('_ga');
    if(this.cookieValue != '') this.getUserInfo();
  }

  login() {
    window.open("https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200");
  }
  
  getUserInfo() {
    this._communicationService.getUserInfo()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: any) => {
      this.userInfo = res.data.currentUser;
    })
  }
}
