import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';



const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatOptionModule,
  MatSelectModule,
  MatExpansionModule,
  MatTooltipModule,
  MatChipsModule,
  MatRadioModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatSelectModule,
  MatRadioModule,
  MatSliderModule,
  MatCardModule,
  MatStepperModule,
  MatDividerModule,
  MatListModule,
  MatOptionModule,
  MatButtonModule,
  MatExpansionModule,
  MatChipsModule,
  MatTooltipModule,
  MatSidenavModule,
  FlexLayoutModule,
  MatIconModule,
  MatBadgeModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [ modules],
  exports: [ modules],
  providers: [ MatDatepickerModule]
})
export class MaterialModule { }
