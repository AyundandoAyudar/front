import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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

  // Extends template
  @Input() innerItemTemplate: TemplateRef<this>;
  get ctxInnerItem() {
    return { item: this.itemSelected };
  }

  @Input() onSearch = (values: { search: string }) => {
    console.debug('FindComponent:onSearch');
  };
  @Input() onSubmitEdit = (values: T, oldItem: T) => {
    console.debug('FindComponent:onSubmitEdit');
  };
  @Input() onPressDelete = (values: T) => {
    console.debug('FindComponent:onSubmitEdit');
  };

  constructor() {}

  onCancelEdit(item) {
    return () => {
      item.modeFrom = 'view';
    };
  }

  ngOnInit() {}
}
