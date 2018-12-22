import { MEAT_API } from './../app.api';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import { Order } from './order.model';


@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
    private http: Http) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  total(): number {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<Order> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      `${MEAT_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers })
    )
      .map(res => res.json());
  }

}
