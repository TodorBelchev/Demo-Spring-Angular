import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileService } from 'src/app/core/service/file.service';

@Component({
  selector: 'app-upload-file-form',
  templateUrl: './upload-file-form.component.html',
  styleUrls: ['./upload-file-form.component.scss']
})
export class UploadFileFormComponent implements OnInit {

  form!: FormGroup;
  file!: File;

  constructor(private formBuilder: FormBuilder, private fileService: FileService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      text: [null],
      number: [null]
    });
  }

  onSubmit() {
    const formData = new FormData();
    const json = {
      text: this.form.controls['text'].value,
      number: this.form.controls['number'].value
    }
    const blob = new Blob([JSON.stringify(json)], {
      type: 'application/json'
    });
    formData.append('json', blob);
    formData.append('file', this.file);

    this.fileService.sendFileInBody(formData).subscribe(res => {
      console.log(res);
    })
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
