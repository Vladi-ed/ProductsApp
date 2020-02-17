import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {Product as ProductListItem} from '../../Classes/product';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductListItem>;

  tableData: MatTableDataSource<ProductListItem>;

  displayedColumns = ['picture', 'name', 'button'];

  allColumns = [];
  sortSelected: any;

  constructor(private dataStore: DataService) {  }

  ngOnInit() {

    // subscribe to data
    this.dataStore.subject.subscribe(products => {
        if (products) {
          // console.table(contactsObj.contacts);
          this.tableData = new MatTableDataSource(products);
          this.allColumns = Object.keys(this.tableData.data[0]);
          console.log('Data loaded..', this.tableData.data[0]);
        }
      });
  }

  ngAfterViewInit()
  {
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;
    this.table.dataSource = this.tableData;
  }

  openAddDialog()
  {

  }

  applyFilter(event: Event )
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();
  }

  sortTable() {
    this.tableData.sort.sort({disableClear: false, start: undefined, id: this.sortSelected});
    // console.log(this.tableData.sort.active);
  }
}
