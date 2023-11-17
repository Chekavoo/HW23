import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnInit, OnDestroy {

  popUp$: Observable<number> | null = null;

  subscription: Subscription | undefined = undefined;

  constructor() {
    this. popUp$ = new Observable<number>(subscriber => {
      const timeout = setTimeout(() => {
        $('.popUpBack').eq(0).fadeIn('slow', 'linear')
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout)
        }
      }
    })
  }
  ngAfterViewInit() {
//Поворот стрелочек
    $('.popUpBack').eq(0).hide()
    let nextUU = $('h3')
    let arr = $('.svg')
    for (let i = 0; i < nextUU.length; i++) {
      nextUU.eq(i).click(() => {
        for (let j = 0; j < nextUU.length; j++) {
          if (arr.eq(j).hasClass('active-no')) {
            arr.eq(j).addClass('active-op').removeClass('active-no')
          }
        }
        arr.eq(i).addClass('active-no')
      })
    }

//Работа аккордиона из JqueryUI
    $("#accordion").accordion();
  }

  ngOnInit() {
    this.subscription = this.popUp$?.subscribe()
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
