import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatInputModule, MatDialogModule, MatButtonModule],
  exports: [MatCardModule, MatInputModule, MatDialogModule, MatButtonModule],
})
export class MaterialModule {}
