import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../auth/services/Course Service';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
})
export class CourseCreateComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      instructor: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      this.courseService.createCourse(this.courseForm.value).subscribe({
        next: () => alert('Course created successfully!'),
        error: () => alert('Error creating course.'),
      });
    }
  }
}
