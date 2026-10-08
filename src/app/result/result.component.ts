import { Component, OnInit } from '@angular/core';
import { HomeEntryService } from '../home/service/home.service';
import { HomeEntry } from '../home/model/home';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  standalone: true,
  styleUrl: './result.component.css',
  imports: [CommonModule, RouterLink],
})
export class ResultComponent implements OnInit {
  entry: HomeEntry | null = null;

  constructor(private homeEntryService: HomeEntryService) {}

  ngOnInit() {
    this.entry = this.homeEntryService.getEntry();
  }
}
