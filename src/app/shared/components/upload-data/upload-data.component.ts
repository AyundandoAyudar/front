import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.scss']
})
export class UploadDataComponent implements OnInit {
  @Input() name: string;

  uploadErrors: any;
  uploadErrorsLogs: any;
  eventFile;
  jsonData;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  file: File | null = null;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
  }

  ////////Upload Massive

  onArchivoSeleccionado($event) {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    this.eventFile = $event;
  }

  uploadSchedled() {
    if (!this.eventFile) {
      return;
    }
    if (this.eventFile.target.files.length === 1) {
      this.subirArchivo(this.eventFile.target.files[0]);
    }
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
    this.uploadErrors = '';
    this.uploadErrorsLogs = '';
  }

  public subirArchivo(file): void {
    this.spinnerService.openAlertDialog();
    let workBook = null;
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      this.jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.spinnerService.close();
    };
    reader.readAsBinaryString(file);

  }


}
