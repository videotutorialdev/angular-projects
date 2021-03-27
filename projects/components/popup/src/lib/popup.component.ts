import { Component, Input, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngid-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent implements OnInit {

  @Input() header: string;
  @Input() modal: NgbModalRef;

  constructor() { }

  ngOnInit(): void {
  }

}
