import { Component, Input, ViewEncapsulation } from '@angular/core';

/**
 * Displays a recipe with a heading, description, and list of ingredients.
 * Difference: Uses modern CSS scoping to scope styles to the content of this component.
 */
@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RecipeCardComponent {
  @Input({ required: true }) heading!: string;
  @Input({ required: true }) description!: string;
  @Input() ingredients: string[] = [];
}
