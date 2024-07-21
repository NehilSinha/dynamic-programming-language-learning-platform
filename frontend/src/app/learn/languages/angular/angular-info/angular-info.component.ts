import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicallService } from '../../../../../services/apicall.service';

@Component({
  selector: 'app-angular-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-info.component.html',
  styleUrl: './angular-info.component.css'
})
export class AngularInfoComponent implements OnInit {
  angularInfo: any;
  errorMessage: string | null = null;

  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('angular').subscribe(
      data => {
        this.angularInfo = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.angularInfo = null;
      }
    );
  }
}
