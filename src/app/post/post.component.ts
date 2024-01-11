import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationType } from '../locationType';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="post">
      <div class="photo-wrapper">
        <img class="photo" src="{{ location.photo }}" alt="" />
      </div>
      <div class="info-wrpapper">
        <h2>{{ location.title }}</h2>
        <p>{{ location.country }}</p>
        <p>{{ location.city }}</p>
        <a [routerLink]="['/details', location.id]">Learn More</a>
      </div>
    </div>
  `,
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() location!: LocationType;
}
