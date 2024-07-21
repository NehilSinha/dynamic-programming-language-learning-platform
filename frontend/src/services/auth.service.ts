// auth.service.ts

import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { User } from '../app/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  signup(user: User): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const users = this.getUsers();
      if (users.find(u => u.username === user.username)) {
        return false;
      }
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  }

  login(user: User): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const users = this.getUsers();
      const userExists = users.find(u => u.username === user.username && u.password === user.password);
      if (userExists) {
        localStorage.setItem('currentUser', JSON.stringify(userExists));
        return true;
      }
      return false;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentUser = this.getCurrentUser();
      if (currentUser) {
        currentUser.lastLogout = new Date();
        this.updateUser(currentUser);
        localStorage.removeItem('currentUser');
      }
    }
  }

  getUsers(): User[] {
    if (isPlatformBrowser(this.platformId)) {
      const users = localStorage.getItem('users');
      return users ? JSON.parse(users) : [];
    }
    return [];
  }

  getCurrentUser(): User | null {
    if (isPlatformBrowser(this.platformId)) {
      const currentUser = localStorage.getItem('currentUser');
      return currentUser ? JSON.parse(currentUser) : null;
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.getCurrentUser() !== null;
    }
    return false;
  }

  updateUser(updatedUser: User): void {
    if (isPlatformBrowser(this.platformId)) {
      let users = this.getUsers();
      const index = users.findIndex(u => u.username === updatedUser.username);
      if (index !== -1) {
        users[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  }

  updateProfile(updatedUser: User): boolean {
    if (isPlatformBrowser(this.platformId)) {
      let users = this.getUsers();
      const currentUser = this.getCurrentUser();
      if (!currentUser) return false;

      const userIndex = users.findIndex(u => u.username === currentUser.username);
      if (userIndex === -1) return false;

      users[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      return true;
    }
    return false;
  }

}
