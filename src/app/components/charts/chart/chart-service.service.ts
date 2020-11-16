import { Injectable } from '@angular/core';
import { DatapickerComponent } from '../../datapicker/datapicker.component';
import { ChartComponent } from './chart.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  
  public dateArray() {
    let yearArr = [];
    for (let i = 0; i < 20; i++) {
      yearArr.push(2000 + i);
    }
    return yearArr;
  }

  Years = this.dateArray();
  
  getYear(){
    return this.Years;
  }
  
  ngOnInit() {
    this.getYear();
  }

  
  // getYear(): Observable<yearsList[]> {
  //   this.YearsList = [11,22,33,44];
  //   return of(DatapickerComponent)
  // }


  // constructor() { 
  //   this.createYearsList();
  // }

  // public createYearsList(): void {
  //   for (let i=0; i < 20; i++) {
  //     this.yearsList.push(2000 + i)
  //   }
  // }
  // public getPeriod(start,end):number[] {
  //   const startPeriod = this.yearsList.indexOf(start);
  //   const endPeriod = this.yearsList.indexOf(end);
  //   return this.yearsList.slice(startPeriod, endPeriod + 1);
  // }

//   public getArray() {
//     return this.yearsList;
//  } 
}
