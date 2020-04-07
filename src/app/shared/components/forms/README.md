# Forms

This package contain form builder to get all form with one component passings inputs in list of `InputBase``

## How to use

Template

```html
<app-form-builder [inputs]="inputs"></app-form-builder>
```

Component

```ts
import { Component, OnInit } from '@angular/core';
import { InputDropdown } from '../../shared/components/forms/models/input-drop-down';
import { InputText } from '../../shared/components/forms/models/input-text';
import { InputBase } from '../../shared/components/forms/models/input-base';
import { InputTypes } from '../../shared/components/forms/models/input-types.enum';

@Component({
  selector: 'app-new-courier',
  templateUrl: './new-courier.component.html',
  styleUrls: ['./new-courier.component.scss'],
})
export class NewCourierComponent implements OnInit {
  inputs: InputBase[] = [
    // Instance Dropdown with class
    new InputDropdown({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' },
      ],
      order: 3,
    }),
    // Instance InputText with class
    new InputText({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1,
    }),
    // Instance InputText simple JSON
    {
      key: 'emailAddress2',
      label: 'Email2',
      type: 'email',
      order: 2,
      formOptions: { validators: [] },
      controlType: InputTypes.InputText,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
```
