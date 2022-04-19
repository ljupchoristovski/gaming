import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'box-item',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() boxInfo: any;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  navigateToDetail(id: string): void {
    this._router.navigateByUrl(`detail/${id}`);
  }
}
