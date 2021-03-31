import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  validateForm(): boolean {
    return (
      this.contactForm.invalid === true ||
      this.contactForm.get('password').value !==
        this.contactForm.get('confirmPassword').value
    );
  }

  isPasswordMatch(): boolean {
    return (
      this.contactForm.get('password').value !==
      this.contactForm.get('confirmPassword').value
    );
  }
}
