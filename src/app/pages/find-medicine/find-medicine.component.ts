import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../shared/services/medicine.service';
import { Observable } from 'rxjs';
import { Medicine } from '../../shared/models/medicine.model';
import { MedicineInputSchema } from '../../shared/schemas/medicine.schema';

@Component({
  selector: 'app-find-medicine',
  templateUrl: './find-medicine.component.html',
  styleUrls: ['./find-medicine.component.scss'],
})
export class FindMedicineComponent implements OnInit {
  constructor(private medicineService: MedicineService) {}
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
    this.medicineService.updateMedicine(new Medicine({ ...oldItem, ...item }));
  };

  onDelete = (item: Medicine) => {
    console.debug('FindMedicineComponent:onDelete', { item });
    this.medicineService.deleteMedicine(new Medicine(item).id);
  };
}
