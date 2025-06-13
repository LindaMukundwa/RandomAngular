import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
})
export class AccountModule {}
