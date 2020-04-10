import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../shared/services/medicine.service';
import { Observable } from 'rxjs';
import { Medicine } from '../../shared/models/medicine.model';
import { MedicineInputSchema } from '../../shared/schemas/medicine.schema';
import { SpinnerService } from '../../shared/services/spinner.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-find-medicine',
  templateUrl: './find-medicine.component.html',
  styleUrls: ['./find-medicine.component.scss'],
})
export class FindMedicineComponent implements OnInit {
  constructor(
    private medicineService: MedicineService,
    private spinnerService: SpinnerService,
    private snackBar: MatSnackBar
  ) {}
  list$: Observable<Medicine[]> = this.medicineService.medicines; // FIXME:  of([])
  schema = MedicineInputSchema;

  ngOnInit() {}

  onSearch = (values: { search: string }) => {
    console.debug('FindMedicineComponent:onSearch');
    this.list$ = this.medicineService.getMedicines((ref) =>
      ref.where('name', '==', values.search)
    );
  };

  onEdit = (item: Medicine, oldItem: Medicine) => {
    console.debug('FindMedicineComponent:onEdit', { item, oldItem });
    this.spinnerService.openAlertDialog();
    this.medicineService
      .updateMedicine(new Medicine({ ...oldItem, ...item }))
      .then((doc) => {
        this.snackBar.open('Medicina actualizada', null, { duration: 2000 });
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open('Lo siento ha ocurrido un error', null, {
          duration: 2000,
        });
      })
      .finally(() => {
        this.spinnerService.close();
      });
  };

  onDelete = (item: Medicine) => {
    console.debug('FindMedicineComponent:onDelete', { item });
    this.spinnerService.openAlertDialog();
    this.medicineService
      .deleteMedicine(new Medicine(item).id)
      .then((doc) => {
        this.snackBar.open('Medicina eliminada', null, { duration: 2000 });
      })
      .catch((error) => {
        console.debug('[ERROR]', { error });
        this.snackBar.open('Lo siento ha ocurrido un error', null, {
          duration: 2000,
        });
      })
      .finally(() => {
        this.spinnerService.close();
      });
  };
}
