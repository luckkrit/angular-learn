import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  contactForm = this.fb.group({
    phone: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
