import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  locationService = inject(LocationsService);

  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    photo: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  constructor() {}

  submitNewPost() {
    this.locationService.submitNewPost(
      this.postForm.value.title ?? '',
      this.postForm.value.description ?? '',
      this.postForm.value.photo ?? '',
      this.postForm.value.country ?? '',
      this.postForm.value.city ?? ''
    );

    this.postForm.reset()
  }
}
