import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {ProductsService} from "../../shared/services/products.service";

@Component({
  selector: 'app-tea-catalog',
  templateUrl: './tea-catalog.component.html',
  styleUrls: ['./tea-catalog.component.css']
})
export class TeaCatalogComponent implements OnInit, OnDestroy {
  private subscribe: Subscription | null = null;
  public products: ProductType[] = []
  public show: boolean = false;

  constructor(private http: HttpClient, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.subscribe = this.productsService.getAllProducts()
      .subscribe((data) => {
        this.products = data;
      })
  }

  ngOnDestroy() {
    this.subscribe?.unsubscribe();
  }
}
