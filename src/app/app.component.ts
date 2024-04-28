import { Component } from '@angular/core';
import { MyHeaderComponent } from './components/my-header/my-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [MyHeaderComponent],
    template: `
        <app-my-header></app-my-header>
        <main>
            <h2>Testing CSS &#64;scope</h2>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <a target="_blank" href="https://www.w3.org/TR/css-cascade-6/">
                W3C Document
            </a>
        </main>
    `,
})
export class AppComponent { }
