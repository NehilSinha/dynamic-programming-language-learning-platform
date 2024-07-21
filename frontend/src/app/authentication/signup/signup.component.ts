import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  avatar: File | null = null;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.avatar = file;
    }
  }

  onSubmit(): void {
    const newUser: User = { username: this.username, password: this.password, avatar: this.avatar};
    if (this.authService.signup(newUser)) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Username already exists';
    }
  }
}
