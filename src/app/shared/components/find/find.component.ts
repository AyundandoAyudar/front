import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent<T> implements OnInit {
  itemSelected: T;

  @Input() keyTitle: keyof T;
  @Input() titleText: string;
  @Input() keyDescription: keyof T;
  @Input() descriptionText: string;
  @Input() list: T[] = [];

  @Input() onSearch = (values: { search: string }) => {
    console.debug('FindComponent:onSearch');
  };

  constructor() {}

  ngOnInit() {}
}
