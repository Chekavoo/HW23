import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./feature/main/main.component";
import {TeaCatalogComponent} from "./feature/tea-catalog/tea-catalog.component";
import {TeaComponent} from "./feature/tea/tea.component";
import {OrderComponent} from "./feature/order/order.component";

const routes: Routes = [
  {
    component: MainComponent,
    path: ''
  },
  {
    component: TeaCatalogComponent,
    path: 'catalog'
  },
  {
    component: TeaComponent,
    path: 'catalog/:id'
  },
  {
    component: OrderComponent,
    path: 'order'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
