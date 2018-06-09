import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-product-entry',
  host: {
    'style': 'display: table-row'
  },
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent {

  imgMaxHeight:number = 80;
  @Input() product: any;

  constructor() { }

  @Output() starsClicked: EventEmitter<number> = new EventEmitter<number>();

  onClickedStars(id: number): void {
    this.starsClicked.emit(id)
  }

}
