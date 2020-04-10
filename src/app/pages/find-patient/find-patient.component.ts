import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../shared/services/patients.service';
import { of, Observable } from 'rxjs';
import { Patient } from '../../shared/models/patient.model';
import { PatientInputSchema } from '../../shared/schemas/patient.schema';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.scss'],
})
export class FindPatientComponent implements OnInit {
  constructor(private patientsService: PatientsService) {}
  list$: Observable<Patient[]> = this.patientsService.patients; // FIXME:  of([])
  schema = PatientInputSchema;

  ngOnInit() {}

  onSearch = (values: { search: string }) => {
    console.debug('FindPatientComponent:onSearch');
    this.list$ = this.patientsService.getPatients((ref) =>
      ref.where('idNumber', '==', values.search)
    );
  };

  onEdit = (item: Patient) => {
    console.debug('FindPatientComponent:onEdit', { item });
  };

  onDelete = (item: Patient) => {
    console.debug('FindPatientComponent:onDelete', { item });
  };
}
