import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// HTTP Modules
import { HttpClientModule } from '@angular/common/http';



// Material
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlikrviewComponent } from './flikrview/flikrview.component';

@NgModule({
  declarations: [
    AppComponent,
    FlikrviewComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	MatCardModule, MatButtonModule,
	FormsModule, ReactiveFormsModule,
	MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
