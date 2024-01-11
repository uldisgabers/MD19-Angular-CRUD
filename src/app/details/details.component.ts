import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LocationType } from '../locationType';
import { LocationsService } from '../locations.service';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  locationService = inject(LocationsService);
  location: LocationType | undefined;
  locationId: number;

  editMode = false;

  editValuesForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  constructor() {
    this.locationId = Number(this.route.snapshot.params['id']);
    // this.locationService.getLocationById(this.locationId).then((location) => {
    //   this.location = location;
    // });
  }

  ngOnInit() {
    this.locationId = Number(this.route.snapshot.params['id']);
    this.getLocation()
  }

  getLocation() {
    this.locationService.getLocationById(this.locationId).then((location) => {
      this.location = location;
    });
  }

  updateFormValues() {
    if (this.editMode && this.location) {
      this.editValuesForm.setValue({
        title: this.location.title,
        description: this.location.description,
        photo: this.location.photo,
        country: this.location.country,
        city: this.location.city,
      });
    }
  }

  deletePost() {
    this.locationService.deletePost(this.locationId);
  }

  setEditModeToTrue() {
    this.editMode = true;
    this.updateFormValues();
  }

  updatePost() {
    this.locationService.updatePost(
      this.locationId,
      this.editValuesForm.value.title ?? '',
      this.editValuesForm.value.description ?? '',
      this.editValuesForm.value.photo ?? '',
      this.editValuesForm.value.country ?? '',
      this.editValuesForm.value.city ?? ''
    );
    this.getLocation();
    this.editMode = false;
    this.updateFormValues()
    window.location.reload();
  }
}
