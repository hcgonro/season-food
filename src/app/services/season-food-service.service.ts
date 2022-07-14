import { EventEmitter, Injectable } from '@angular/core';
import { Season } from '../interfaces/Season';

@Injectable({
  providedIn: 'root'
})
export class SeasonFoodServiceService {

  selectedSeason: Season = { id: 1, name: "Winter" };
  seasonChanged: EventEmitter<Season> = new EventEmitter<Season>();

}
