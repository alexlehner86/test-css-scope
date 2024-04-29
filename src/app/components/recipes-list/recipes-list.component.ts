import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../../models/recipe.interface';
import { RecipeCardOldComponent } from '../recipe-card-old/recipe-card-old.component';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipeCardComponent, RecipeCardOldComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class RecipesListComponent {
  @Input() items: Recipe[] = [];
}
