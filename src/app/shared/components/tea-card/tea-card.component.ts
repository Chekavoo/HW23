import {Component, Input} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.css']
})

export class TeaCardComponent {
  @Input() product: ProductType = {
    description: '',
    id: 0,
    image: '',
    price: 0,
    title: ''
  };

  @Input() show: boolean = false;
}
