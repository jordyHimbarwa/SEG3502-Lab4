import { Component } from '@angular/core';
import {ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeEntryService } from '../home/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class HomeComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private homeEntryService: HomeEntryService) {
    this.userForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }



  onSubmit() {
    if (this.userForm.valid) {
      const entry = this.userForm.value;
      this.homeEntryService.setEntry(entry);
      this.router.navigate(['/result']);
    }
  }
}
