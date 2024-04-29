import { Component } from '@angular/core';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCardOldComponent } from './components/recipe-card-old/recipe-card-old.component';
import { Recipe } from './models/recipe.interface';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MyHeaderComponent, RecipesListComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    public recipes: Recipe[] = [
        {
            heading: "Pizza Margherita",
            description: "The best pizza in town!",
            ingredients: ['Cutting edge CSS features!', 'Active dry yeast', 'Bread flour', 'Tomato sauce', 'Mozzarella cheese'],
            useOldComponent: false,
        },
        {
            heading: "Pizza Margherita (Old)",
            description: "The (second) best pizza in town!",
            ingredients: ['DOM cluttering view encapsulation', 'Active dry yeast', 'Bread flour', 'Tomato sauce', 'Mozzarella cheese'],
            useOldComponent: true,
        },
        {
            heading: "Cheeseburger",
            description: "A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time.",
            ingredients: ['Brioche hamburger buns', 'Romaine or shredded lettuce', 'Sliced tomato', 'Sliced red onion'],
            useOldComponent: false,
        },
    ];
}
