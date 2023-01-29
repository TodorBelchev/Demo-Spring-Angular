import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileFormComponent } from './modules/upload-file-form/upload-file-form.component';

@NgModule({
	declarations: [
		AppComponent,
		UploadFileFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
    HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
