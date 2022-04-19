import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/directives/unsubscribe.component';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss'],
})
export class BoxesComponent extends BaseComponent implements OnInit {
  boxes: any;
  constructor(private _communicationService: CommunicationService) {
    super();
  }

  ngOnInit(): void {
    this._communicationService.getAllBoxes()
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: any) => {
      this.boxes = res.boxes.edges;
    });
  }
}
