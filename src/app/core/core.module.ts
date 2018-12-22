import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

// Obsoleto!
@NgModule({
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService
  ]
})
export class CoreModule { }
