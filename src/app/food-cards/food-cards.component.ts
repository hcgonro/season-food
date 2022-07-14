import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../interfaces/Country';
import { FoodCard } from '../interfaces/FoodCard';
import { Season } from '../interfaces/Season';

import { FOODCARDLIST } from '../data/FoodList';

import { SeasonFoodServiceService } from '../services/season-food-service.service';

@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrls: ['./food-cards.component.css']
})
export class FoodCardsComponent implements OnInit {

  foodCards: FoodCard[] = FOODCARDLIST;
  foodCardsFiltered?: FoodCard[];
  selectedCountry?: Country;

  constructor(public seasonFoodService: SeasonFoodServiceService) {
  }

  ngOnInit(): void {
    this.seasonFoodService.seasonChanged
      .subscribe(
        (selectedSeason: Season) =>  {
          this.foodCardsFiltered = this.foodCards.filter(foodCard => foodCard.season.id == selectedSeason.id);
        });
    this.seasonFoodService.seasonChanged.next(this.seasonFoodService.selectedSeason);
  }

}
