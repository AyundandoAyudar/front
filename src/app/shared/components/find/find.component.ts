import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../forms/models/input-base';
import { modeFrom } from '../forms/form-util.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent<T> implements OnInit {
  itemSelected: T;
  mode: modeFrom = 'view';

  @Input() keyTitle: keyof T;
  @Input() titleText: string;
  @Input() keyDescription: keyof T;
  @Input() descriptionText: string;
  @Input() list: T[] = [];
  @Input() schema: () => InputBase[];

  @Input() onSearch = (values: { search: string }) => {
    console.debug('FindComponent:onSearch');
  };
  @Input() onSubmitEdit = (values: T) => {
    console.debug('FindComponent:onSubmitEdit');
  };

  constructor() {}

  onDelete(item: T) {
    console.debug('onDelete', { item });
  }

  onCancelEdit(item) {
    return () => {
      item.modeFrom = 'view';
    };
  }

  ngOnInit() {}
}
