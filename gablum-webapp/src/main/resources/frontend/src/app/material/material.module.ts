import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import { MatNativeDateModule, MatSliderModule, MatCardModule, MatListModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';


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
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [ modules],
  exports: [ modules],
  providers: [ MatDatepickerModule]
})
export class MaterialModule { }
