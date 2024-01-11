import { Component, inject, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { LocationType } from '../locationType';
import { LocationsService } from '../locations.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostComponent, HttpClientModule],
  // templateUrl: './home.component.html',
  template: `
    <section class="section-wrapper">
      <div class="results">
        <app-post
          *ngFor="let location of locationList"
          [location]="location"
        ></app-post>
      </div>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  locationList: LocationType[] = [];
  locationsService: LocationsService = inject(LocationsService);

  // constructor() {
  //   // this.getAllLocations()
  //   this.locationsService
  //     .getAllLocations()
  //     .then((locationList: LocationType[]) => {
  //       this.locationList = locationList;
  //     });

  // }

  getAllLocations() {
    this.locationsService
      .getAllLocations()
      .then((locationList: LocationType[]) => {
        this.locationList = locationList;
      });
  }

  ngOnInit() {
    this.getAllLocations();
  }

  // constructor(private locationsService: LocationsService) {}

  // ngOnInit(): void {
  //   this.locationsService.getAllLocations().subscribe((data) => {
  //     this.locationList = data;
  //   });
  // }

  // getAllLocations() {
  //   this.locationsService
  //     .getAllLocations()
  //     .subscribe((locationList) => (this.locationList = locationList));
  // }
}
