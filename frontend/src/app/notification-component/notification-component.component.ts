import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { NotificationService } from '../auth/services/NotificationService';

@Component({
  selector: 'app-notification',
  standalone:true,
  templateUrl: './notification-component.component.html',
  styleUrls: ['./notification-component.component.css'],
  imports:[ReactiveFormsModule],
})
export class NotificationComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  loading = false; // To manage loading state
  successMessage: string | null = null; // Success message after sending notification
  errorMessage: string | null = null; // Error message in case of failure

  constructor(private fb: FormBuilder, private notificationService: NotificationService) {}

  sendNotification() {
    const { email, message } = this.form.value;

    // Ensure email and message are strings (default to empty string if null/undefined)
    const emailString = email ?? '';
    const messageString = message ?? '';

    // Validate that both email and message are non-empty
    if (!emailString || !messageString) {
      this.errorMessage = 'Please provide both email and message.';
      this.successMessage = null; // Clear success message
      return; // Don't send notification if form is invalid
    }

    this.loading = true; // Set loading to true while sending notification

    this.notificationService.sendNotification(emailString, messageString).subscribe(
      () => {
        this.loading = false; // Set loading to false once the notification is sent
        this.successMessage = 'Notification sent successfully!'; // Show success message
        this.errorMessage = null; // Clear any error message

        // Reset the form after submission
        this.form.reset();
      },
      (error) => {
        this.loading = false; // Set loading to false in case of error
        this.errorMessage = 'Failed to send notification. Please try again.'; // Show error message
        this.successMessage = null; // Clear success message
      }
    );
  }
}
