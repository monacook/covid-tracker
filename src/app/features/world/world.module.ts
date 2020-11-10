import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from '../../shared/shared.module';
import { WorldComponent } from './world.component';

@NgModule({
  declarations: [WorldComponent],
  imports: [SharedModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule],
})
export class WorldModule {}
