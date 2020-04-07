import { Injectable } from '@angular/core';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<SpinnerComponent>
  ) { }

  openAlertDialog() {
    this.dialogRef = this.dialog.open(SpinnerComponent, {
      data: {
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
      disableClose: true
    });
  }

  close(): void {
    this.dialogRef.close(true);
  }
}
