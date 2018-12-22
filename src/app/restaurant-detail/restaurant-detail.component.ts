import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  providers: [RestaurantsService]
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.activatedRoute.snapshot.params['id']).subscribe(
      res => this.restaurant = res
    )
  }

}
