import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngid-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() header: string;
  @Input() description: string;
}
