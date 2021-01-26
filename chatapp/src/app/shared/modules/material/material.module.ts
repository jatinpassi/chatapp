import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const matModules = [
  MatFormFieldModule,
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules],
})
export class MaterialModule {}
