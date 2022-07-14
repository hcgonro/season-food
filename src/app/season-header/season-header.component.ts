import { Component, OnInit } from '@angular/core';

import { Country } from '../interfaces/Country';
import { Season } from '../interfaces/Season';

import { COUNTRYLIST } from '../data/CountryList';
import { SEASONLIST } from '../data/SeasonList';
import { FoodCardsComponent } from '../food-cards/food-cards.component';
import { FoodCard } from '../interfaces/FoodCard';
import { SeasonFoodServiceService } from '../services/season-food-service.service';

@Component({
  selector: 'app-season-header',
  templateUrl: './season-header.component.html',
  styleUrls: ['./season-header.component.css']
})
export class SeasonHeaderComponent implements OnInit {
  // Season variables
  seasonList: Season[] = SEASONLIST;
  selectedSeason?: Season;
  seasonDate: Date = new Date();
  seasonImage: string = "";
  
  // Country variables
  countries: Country[] = COUNTRYLIST;
  selectedCountry?: Country;
  countryImage: string = "";

  // FoodCard functions
  getSeasonFood?: FoodCard[];

  constructor(public seasonFoodService: SeasonFoodServiceService
  ) { }

  ngOnInit(): void {
    this.getSeason();
    if(this.selectedSeason) {
      this.setImage(this.selectedSeason.name, 'seasons');
    }

    //Only Spain
    this.selectedCountry = this.countries.find(country => country.id === 1)!;
    this.setImage(this.selectedCountry.name, 'countries');
  }
  
  /**
   * Get the season from the current date
   */
  getSeason(): void {
    switch (this.seasonDate.getMonth()) {
      case 0: case 1: case 11: 
        this.selectedSeason = this.seasonList.find(season => season.id === 1); // winter 
        break;
      case 2: case 3: case 4: 
        this.selectedSeason = this.seasonList.find(season => season.id === 2); // spring
        break;
      case 5: case 6: case 7: 
        this.selectedSeason = this.seasonList.find(season => season.id === 3); // summer
        break;
      case 8: case 9: case 10: 
        this.selectedSeason = this.seasonList.find(season => season.id === 4); // autumn
        break;
    }
    this.seasonFoodService.selectedSeason = this.selectedSeason!;
  }

  /**
   * Set the image of season or country
   * @param imageName The season to set
   * @param imageType The type of image to set
   */
  setImage(imageName: string, imageType: string): void {
    let imageUrl: string = `assets/images/${imageType}/${imageName.toLowerCase()}.png`;
    switch (imageType) {
      case 'seasons':
        this.seasonImage = imageUrl;
        break;
      case 'countries':
        this.countryImage = imageUrl;
        break;
    }
  }

  /**
   * Get season and set season image when date changes
   * @param event The event that triggered the function
   */
  seasonChange(event: any): void {
    this.seasonDate = event.value;
    this.getSeason();
    if(this.selectedSeason) {
      this.setImage(this.selectedSeason.name, 'seasons');
      this.seasonFoodService.seasonChanged.next(this.selectedSeason);
    }
  }

  /**
   * Get country and set country image when country changes
   * @param event The event that triggered the function
   */
  countryChange(event: any): void {
    this.selectedCountry = this.countries.find(country => country.id === event.value)!;
    this.setImage(this.selectedCountry.name, 'countries');
    
  }
}