import { Component, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<{}>) {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
