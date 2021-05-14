import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TextUtils } from 'utils';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'ngid-accordion-item',
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent implements OnInit, AfterViewInit {
  @Input() header: string;
  @Input() active: boolean;

  public accordionItemId: string;
  constructor(public accordionService: AccordionService) {}

  ngOnInit(): void {
    this.setStateAccordionItemId();
  }

  ngAfterViewInit() {
    if (!this.accordionService.isShowMultiple) {
      const accordionItemCollapse = document.getElementById(
        this.accordionItemId
      );
      if (accordionItemCollapse) {
        accordionItemCollapse.setAttribute(
          'data-bs-parent',
          '#' + this.accordionService.accordionParentId
        );
      }
    }
  }

  private setStateAccordionItemId(): void {
    this.accordionItemId =
      this.accordionService.accordionParentId +
      '-' +
      TextUtils.Builder().generateRandomString();
  }
}
