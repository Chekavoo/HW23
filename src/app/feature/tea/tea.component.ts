import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../shared/services/products.service";
import {Subscription} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit, OnDestroy{
  public show: boolean = true;
  private subscribe: Subscription | null = null;
  public product: ProductType = {
    description: '',
    id: 0,
    image: '',
    price: 0,
    title: ''
  }

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.subscribe = this.productsService.getProduct(+params['id'])
          .subscribe(data => {
            this.product = data;
          })
      }
    })
  }

  ngOnDestroy() {
    this.subscribe?.unsubscribe();
  }
}
