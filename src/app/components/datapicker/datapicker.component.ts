import { Input, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartServiceService } from '../charts/chart/chart-service.service';
import { ChartComponent } from '../charts/chart/chart.component';


@Component({
  selector: 'cd-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.scss'],
  providers: [ ChartServiceService ]
})
export class DatapickerComponent {
  years = new FormControl();
  yearsList:number[] = [];

  constructor( private chartserviceservice : ChartServiceService ) {};

  getYear() {
    return this.chartserviceservice.Years;
  }

  ngOnInit(){
    this.yearsList = this.chartserviceservice.getYear();
    this.getYear();
}


  
  // getYear(){
  //    this.year.getYear();
  //  }
   
   
//   @Input() userName: string;
//   _userAge: number;
   
//  @Input()
//  set userAge(age:number) {
//      if(age<0)
//          this._userAge=0;
//      else if(age>100)
//          this._userAge=100;
//      else
//          this._userAge = age;
// }
// constructor (public chartService: ChartServiceService) { }

//   yearsList = this.chartService.getArray();

// }


}