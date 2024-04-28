import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-header',
  standalone: true,
  imports: [],
  templateUrl: './my-header.component.html',
  styleUrl: './my-header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class MyHeaderComponent {
  @HostBinding('attr.role') role = 'banner';
}
