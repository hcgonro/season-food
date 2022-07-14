import { Country } from "./Country";
import { Season } from "./Season";

export interface FoodCard {
    id: number;
    name: string;
    country: Country;
    season: Season;
    startMonth: number;
    endMonth: number;
    description: string;
    image: string;
}