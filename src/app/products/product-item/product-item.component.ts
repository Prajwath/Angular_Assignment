import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/services/products.service';
import { using } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})

// using the Input for the Products used documents:https://devdocs.io/angular~16/tutorial/first-app/first-app-lesson-05
// for Output on delete i used this website https://www.pluralsight.com/resources/blog/guides/posting-deleting-putting-data-angular
// and also chatgpt for error filteration and smooth work
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
