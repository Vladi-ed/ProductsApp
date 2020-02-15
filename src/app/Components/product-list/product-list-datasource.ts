import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {Product as ProductListItem} from '../../Classes/product';

// // TODO: Replace this with your own data model type
// export interface ProductListItem {
//   name: string;
//   id: number;
// }

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ProductListItem[] = [
  {id: 1, name: 'Hydrogen', description: 'description', price: 1234.2, creationDate: new Date()},
  {id: 2, name: 'Helium', description: 'description', price: 234.2, creationDate: new Date()},
  {id: 3, name: 'Lithium', description: 'description', price: 234.2, creationDate: new Date()},
  {id: 4, name: 'Beryllium', description: 'description', price: 333.2, creationDate: new Date()},
  {id: 5, name: 'Boron', description: 'description', price: 2244.2, creationDate: new Date()},
  {id: 6, name: 'Carbon', description: 'description', price: 22.2, creationDate: new Date()},
  {id: 7, name: 'Nitrogen', description: 'description', price: 5.4, creationDate: new Date()},
  {id: 8, name: 'Oxygen', description: 'description', price: 232.2, creationDate: new Date()},
  {id: 9, name: 'Fluorine', description: 'description', price: 232.2, creationDate: new Date()},
  {id: 10, name: 'Neon', description: 'description', price: 292.2, creationDate: new Date()},
  {id: 11, name: 'Sodium', description: 'description', price: 282.2, creationDate: new Date()},
  {id: 12, name: 'Magnesium', description: 'description', price: 72.2, creationDate: new Date()},
  {id: 13, name: 'Aluminum', description: 'description', price: 222.2, creationDate: new Date()},
  {id: 14, name: 'Silicon', description: 'description', price: 232.2, creationDate: new Date()},
  {id: 15, name: 'Phosphorus', description: 'description', price: 2442.2, creationDate: new Date()},
  {id: 16, name: 'Sulfur', description: 'description', price: 2222.2, creationDate: new Date()},
  {id: 17, name: 'Chlorine', description: 'description', price: 212.2, creationDate: new Date()},
  {id: 18, name: 'Argon', description: 'description', price: 92.2, creationDate: new Date()},
  {id: 19, name: 'Potassium', description: 'description', price: 922.2, creationDate: new Date()},
  {id: 20, name: 'Calcium', description: 'description', price: 922.9, creationDate: new Date()},
];

/**
 * Data source for the ProductList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductListDataSource extends DataSource<ProductListItem> {
  data: ProductListItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;
  filter: any;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProductListItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ProductListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ProductListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
