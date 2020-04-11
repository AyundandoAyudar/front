import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {

  uploadScheduledsErrors: any;
  uploadScheduledsErrorsLogs: any;
  eventFile;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  file: File | null = null;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  ////////Upload Massive Scheduleds

  onArchivoSeleccionado($event) {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    this.eventFile = $event;
  }

  uploadSchedled() {

    const formData = new FormData();

    if (this.eventFile.target.files.length === 1) {
      formData.append('file', this.eventFile.target.files.item(0));
      this.subirArchivo(formData)
    }
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
    this.uploadScheduledsErrors = '';
    this.uploadScheduledsErrorsLogs = '';
  }

  public subirArchivo(file) {
    this.spinnerService.openAlertDialog();

  }

}
