import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeaComponent} from "./tea.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    TeaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TeaModule { }
