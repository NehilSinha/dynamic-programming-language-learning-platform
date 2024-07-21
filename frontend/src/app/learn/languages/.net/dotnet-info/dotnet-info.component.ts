import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApicallService } from '../../../../../services/apicall.service';

@Component({
  selector: 'app-dotnet-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dotnet-info.component.html',
  styleUrl: './dotnet-info.component.css'
})
export class DotnetInfoComponent {
  dotnetInfo: any;
  errorMessage: string | null = null;

  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('dotnet').subscribe(
      data => {
        this.dotnetInfo = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.dotnetInfo = null;
      }
    );
  }
}
