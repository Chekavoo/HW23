import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subscription, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";

declare var $: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements AfterViewInit, OnInit, OnDestroy {
  public showBtn = false;

  orderForm = this.fb.group({
    item: {value: '', disabled: true},
    name: ['', [Validators.required, Validators.pattern('[А-Яа-я]+')]],
    lastName: ['', [Validators.required, Validators.pattern('[А-Яа-я]+')]],
    phone: ['', [Validators.required, Validators.pattern('[\+]{0,1}[0-9]{11}')]],
    country: ['', [Validators.required]],
    index: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('[А-Яа-я0-9\- \/]+')]],
    comment: ''
  })

  private subscription: Subscription | null = null;
  private orderSubscription: Subscription | null = null;

  get name() {
    return this.orderForm.get('name')
  }

  get lastName() {
    return this.orderForm.get('lastName')
  }

  get phone() {
    return this.orderForm.get('phone')
  }

  get country() {
    return this.orderForm.get('country')
  }

  get index() {
    return this.orderForm.get('index')
  }

  get address() {
    return this.orderForm.get('address')
  }

  makeAnOrder() {
    this.orderSubscription = this.productService.creatOrder({
      name: this.name!.value,
      last_name: this.lastName!.value,
      phone: this.phone!.value,
      country: this.country!.value,
      zip: this.index!.value,
      product: this.orderForm.get('item')!.value,
      address: this.address!.value,
      comment: this.orderForm.get('item')!.value,
    }).subscribe(response => {
      if (response.success === 0) {
        this.showBtn = true;
      } else {
        $('.hidden').fadeOut('slow', 'linear')
        $('.popup').fadeIn('slow', 'linear')
        this.showBtn = false;
        console.log(response)
      }
    })
  }

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductsService) {
  }


  ngAfterViewInit() {
    $('.popup').hide()
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(param => {
      if (param['name']) {
        this.orderForm?.patchValue({
          item: param['name']
        })
      } else {
        this.router.navigate(['/'])
      }
    })
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.orderSubscription?.unsubscribe();
  }
}
