import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./default/header/header.component";
import { FooterComponent } from "./default/footer/footer.component";
import { HomeComponent } from "./default/home/home.component";
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, HeaderComponent, FooterComponent, HomeComponent, MatTableModule, DatePipe]
})
export class AppComponent {
  title = 'codez';
}