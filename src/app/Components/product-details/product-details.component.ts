import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    description: [null],
  });

  hasUnitNumber = false;



  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
