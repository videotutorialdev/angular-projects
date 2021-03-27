import { Component, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '@app/blog';

  public modal: NgbModalRef;

  constructor(public ngbModal: NgbModal) {}

  public handleShowModal(content: TemplateRef<object>): void {
    console.log(content);
    console.log('Info: Click works!!!');
    this.modal = this.ngbModal.open(content);

    this.modal.closed.subscribe(response => {
      console.log('Info: Come from closed observable');
      console.log(response);
    })
   
    this.modal.dismissed.subscribe(response => {
      console.log('Info: Come from dismissed observable');
      console.log(response);
    })
  }

  public handleCloseModal(): void {
    this.modal.close('Come from manual close modal');
  }

}
