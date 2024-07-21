import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../../../../services/apicall.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-py-distributing-modules',
  standalone: true,
  imports: [SidebarComponent,CommonModule],
  templateUrl: './py-distributing-modules.component.html',
  styleUrl: './py-distributing-modules.component.css'
})
export class PyDistributingModulesComponent implements OnInit {
  pythonInfo: any;
  errorMessage: string | null = null;
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private apicallService: ApicallService) { }

  ngOnInit(): void {
    this.apicallService.getInfo('python-info/distribution').subscribe(
      data => {
        this.pythonInfo = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
        this.pythonInfo = null;
      }
    );
  }
}