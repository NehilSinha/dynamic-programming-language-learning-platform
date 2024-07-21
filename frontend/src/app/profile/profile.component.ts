import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Corrected to styleUrls
})
export class ProfileComponent implements OnInit {
  user: User = { username: '', password: '', avatar: null };
  confirmPassword: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  avatarPreview: string | ArrayBuffer | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.user = currentUser;
      // Load avatar preview if available
      if (this.user.avatar) {
        this.loadAvatarPreview();
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void {
    if (this.user.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const updatedUser = { ...this.user };
    if (this.authService.updateProfile(updatedUser)) {
      this.successMessage = 'Profile updated successfully';
    } else {
      this.errorMessage = 'Error updating profile';
    }
  }

  onAvatarChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.user.avatar = file;
      this.readAvatarFile(file);
    }
  }

  readAvatarFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.avatarPreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  loadAvatarPreview(): void {
    if (this.user.avatar instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result;
      };
      reader.readAsDataURL(this.user.avatar);
    }
  }
}
