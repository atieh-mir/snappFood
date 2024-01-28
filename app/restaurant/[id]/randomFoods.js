
import { pizza,burgers,drinks,hotdog,salads_fries,steaks } from "./index.js";



// Shuffle array
const pizzas = pizza.sort(() => 0.5 - Math.random());
const burger = burgers.sort(() => 0.5 - Math.random());
const drink = drinks.sort(() => 0.5 - Math.random());
const hotdogs = hotdog.sort(() => 0.5 - Math.random());
const salad = salads_fries.sort(() => 0.5 - Math.random());
const steak = steaks.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selectedPizzas = pizzas.slice(0, 4);
let selectedBurger = burger.slice(0, 4);
let selectedDrink = drink.slice(0, 4);
let selectedHotdogs = hotdogs.slice(0, 3);
let selectedSalads = salad.slice(0, 5);
let selectedSteak = steak.slice(0, 3);

export {
    selectedPizzas,
    selectedBurger,
    selectedDrink,
    selectedHotdogs,
    selectedSalads,
    selectedSteak

}    





