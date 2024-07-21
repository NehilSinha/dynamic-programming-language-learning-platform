import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicallService } from '../../../../../services/apicall.service';

@Component({
  selector: 'app-c-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-info.component.html',
  styleUrl: './c-info.component.css'
})
export class CInfoComponent implements OnInit {
  cInfo: any;
  errorMessage: string | null = null;

  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('c').subscribe(
      data => {
        this.cInfo = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.cInfo = null;
      }
    );
  }
}
