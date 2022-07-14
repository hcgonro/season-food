import { Country } from "../interfaces/Country";
import { FoodCard } from "../interfaces/FoodCard";
import { Season } from "../interfaces/Season";
import { COUNTRYLIST } from "./CountryList";
import { SEASONLIST } from "./SeasonList";

const countrySpain: Country = COUNTRYLIST[0];
const countryFrance: Country = COUNTRYLIST[1];
const countryGermany: Country = COUNTRYLIST[2];
const countryItaly: Country = COUNTRYLIST[3];

const seasonWinter: Season = SEASONLIST[0];
const seasonSpring: Season = SEASONLIST[1];
const seasonSummer: Season = SEASONLIST[2];
const seasonAutumn: Season = SEASONLIST[3];

export const FOODCARDLIST: FoodCard[] = [
    {
        id: 1,
        name: "Avocado",
        country: countrySpain,
        season: seasonAutumn,
        startMonth: 9,
        endMonth: 4,
        description: "The avocado (Persea americana) is a tree originating in the Americas which is likely native to the highland regions of south-central Mexico to Guatemala. ",
        image: "assets/images/food/avocado.jpg"
    },
    {
        id: 2,
        name: "Apricot",
        country: countrySpain,
        season: seasonSummer,
        startMonth: 3,
        endMonth: 8,
        description: "An apricot is a fruit, or the tree that bears the fruit, of several species in the genus Prunus. Usually, an apricot is from the species P. armeniaca, but the fruits of the other species in Prunus sect.",
        image: "assets/images/food/apricot.jpg"
    },
    {
        id: 3,
        name: "Kaki",
        country: countrySpain,
        season: seasonAutumn,
        startMonth: 8,
        endMonth: 0,
        description: "Manilkara kauki is a plant in the subfamily Sapotoideae, and the tribe Sapoteae of the family Sapotaceae; and is the type species for the genus Manilkara.",
        image: "assets/images/food/kaki.jpg"
    },
    {
        id: 4,
        name: "Cherry",
        country: countrySpain,
        season: seasonSpring,
        startMonth: 3,
        endMonth: 7,
        description: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit). Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus.",
        image: "assets/images/food/cherry.png"
    },
    {
        id: 5,
        name: "Avocado",
        country: countrySpain,
        season: seasonWinter,
        startMonth: 9,
        endMonth: 4,
        description: "The avocado (Persea americana) is a tree originating in the Americas which is likely native to the highland regions of south-central Mexico to Guatemala. ",
        image: "assets/images/food/avocado.jpg"
    },
    {
        id: 6,
        name: "Avocado",
        country: countrySpain,
        season: seasonSpring,
        startMonth: 9,
        endMonth: 4,
        description: "The avocado (Persea americana) is a tree originating in the Americas which is likely native to the highland regions of south-central Mexico to Guatemala. ",
        image: "assets/images/food/avocado.jpg"
    },
    {
        id: 7,
        name: "Cherry",
        country: countrySpain,
        season: seasonSummer,
        startMonth: 3,
        endMonth: 7,
        description: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit). Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus.",
        image: "assets/images/food/cherry.png"
    },
];