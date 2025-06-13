// account-settings.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  standalone: false
})
export class AccountSettingsComponent implements OnInit {
  accountForm!: FormGroup;
  profileImageUrl = 'assets/profile.jpg';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      firstName: ['Linda', Validators.required],
      middleName: [''],
      lastName: ['Mukundwa', Validators.required],
      email: [{ value: 'linda@tributary.com', disabled: true }, [Validators.required, Validators.email]],
      dob: ['2000-04-30', Validators.required],
      password: ['********', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log(this.accountForm.value);
      // calls on the backend service to update the account
      // also uses any required middleware
    }
  }

  onLogout(): void {
    // implement logout logic
  }

  onChangePicture(): void {
    // open file picker
  }
}
