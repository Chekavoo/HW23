import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeaCardComponent} from "./components/tea-card/tea-card.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";



@NgModule({
  declarations: [
    TeaCardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    TeaCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class SharedModule { }
