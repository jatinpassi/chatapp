import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from 'src/app/auth/components/auth/auth.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
