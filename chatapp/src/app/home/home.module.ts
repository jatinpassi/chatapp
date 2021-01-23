import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HomeComponent } from 'src/app/home/components/home/home.component';

import { HomeRoutingModule } from 'src/app/home/home-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
