import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../auth/services/AdminService';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  users: any[] = [];
  courses: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe((data) => {
      this.users = data;
    });
    this.adminService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(() => {
      alert('User deleted');
      this.ngOnInit(); // Refresh data
    });
  }

  deleteCourse(id: number) {
    this.adminService.deleteCourse(id).subscribe(() => {
      alert('Course deleted');
      this.ngOnInit(); // Refresh data
    });
  }
}
