import { Component, OnInit } from '@angular/core';
import { PatientInputSchema } from '../../shared/schemas/patient.schema';
import { InputBase } from '../../shared/components/forms/models/input-base';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss'],
})
export class NewPatientComponent implements OnInit {
  inputs: InputBase[] = PatientInputSchema();
  name: string = 'pacientes';
  ngOnInit() { }
}
