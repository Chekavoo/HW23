import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeaCatalogComponent} from "./tea-catalog.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    TeaCatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TeaCatalogModule { }
