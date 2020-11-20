import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ICountryDetails } from 'src/app/common/models/country-details-interface';
import { CovidService } from 'src/app/common/services/covid.service';

@Component({
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private readonly service: CovidService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['name', 'totalDeaths', 'totalConfirmed', 'totalRecovered', 'date'];
  public dataSource = new MatTableDataSource<ICountryDetails>();
  public subscription = new Subscription();

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.subscription.add(this.service.getSummary().subscribe(({ countries }) => (this.dataSource.data = countries)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
