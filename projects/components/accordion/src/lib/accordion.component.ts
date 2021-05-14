import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TextUtils } from 'utils';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'ngid-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers: [AccordionService],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit {
  @Input() isShowMultiple: boolean;
  @Input() expandAll: boolean;

  constructor(public accordionService: AccordionService) {}

  ngOnInit(): void {
    this.setStateAccordionService();
  }

  private setStateAccordionService(): void {
    this.accordionService.accordionParentId =
      TextUtils.Builder().generateRandomString();
    this.accordionService.isShowMultiple = this.isShowMultiple;
    this.accordionService.expandAll = this.expandAll;
  }
}
