import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileFormComponent } from './modules/upload-file-form/upload-file-form.component';

const routes: Routes = [
	{
		path: 'upload-file-form',
		component: UploadFileFormComponent
	},
	{
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
