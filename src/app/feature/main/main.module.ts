import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MainComponent} from "./main.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        NgOptimizedImage
    ]
})
export class MainModule { }
