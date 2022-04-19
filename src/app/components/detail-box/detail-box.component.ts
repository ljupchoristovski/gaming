import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/directives/unsubscribe.component';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.scss'],
})
export class DetailBoxComponent extends BaseComponent implements OnInit {
  boxDetails: any;
  detailBoxId!: string;
  constructor(private _route: ActivatedRoute, private _communicationService: CommunicationService) {
    super();
  }

  ngOnInit(): void {
    this._route.params
    .pipe(takeUntil(this.destroy$))
    .subscribe((params) => {
      this.detailBoxId = params['id'];
      this.getBoxDetails();
    });
  }

  getBoxDetails() {
    this._communicationService.getBoxDetails(this.detailBoxId)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: any) => {
      this.boxDetails = res.box;
    });
  }

  openBox() {
    this._communicationService.openBox(this.detailBoxId)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: any) => {
      console.log(res)
    })
  }
}
