import { Component } from '@angular/core';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeCardOldComponent } from './components/recipe-card-old/recipe-card-old.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MyHeaderComponent, RecipeCardComponent, RecipeCardOldComponent],
    templateUrl: './app.component.html',
})
export class AppComponent { }
