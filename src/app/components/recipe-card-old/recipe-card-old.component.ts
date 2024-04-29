import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.interface';

/**
 * Identical functionality as RecipeCardComponent.
 * Difference: Uses Angular's standard view encapsulation for CSS styles.
 */
@Component({
  selector: 'app-recipe-card-old',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card-old.component.html',
  styleUrl: './recipe-card-old.component.css'
})
export class RecipeCardOldComponent {
  @Input({ required: true }) recipe!: Recipe;
}
