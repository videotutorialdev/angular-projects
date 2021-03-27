import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngid-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Input() header: string;
  constructor(public ngbActiveModal: NgbActiveModal) { }
}
