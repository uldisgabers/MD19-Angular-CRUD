import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <main>
      <header class="header">
        <div class="nav-menu">
          <a [routerLink]="['/']">
            <i class="ai-home home_icon"></i>
          </a>
          <h2>MY TRAVEL BLOG</h2>
          <a [routerLink]="['/new-post']">
            <h3>NEW POST</h3>
          </a>
        </div>
      </header>

      <router-outlet class="content"></router-outlet>
    </main>
  `,
})
export class AppComponent {
  title = 'exercises';
}
