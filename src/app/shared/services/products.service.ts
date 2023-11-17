import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<ProductType[]>('https://testologia.site/tea')
  }

  getProduct(id: number) {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
  }

  creatOrder(data: {name: string | null, last_name: string | null, phone: string | null, country: string | null, zip: string | null, product: string | null, address: string | null, comment: string | null}) {
    return this.http.post<{success: number, message?: string}>('https://testologia.site/order-tea', data)
  }
}
