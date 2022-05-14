import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { of, distinct } from 'rxjs';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit {

  constructor(private _service: ServiceService) { }
  carImage:string = 'assets/Images/carImage.jpg';
  manufacturerFilter: Array<string> | undefined;
  yearFilter: Array<string> | undefined;
  colourFilter: Array<string> | undefined;

  selectedManufacturer: string | undefined;
  selectedColour: string | undefined;
  selectedYear: string | undefined;

  carCompanyList:any;

  ngOnInit(): void {
    this.getCars();

  }

  data: any;

  getCars(){
    this._service.getCarData().subscribe((response)=>{
      this.data = response;
      this.data = this.data.cars;
      this.getFilterValues();
    });
  }

  getFilterValues(){
    let tempManu = new Set();
    let tempColor = new Set();
    let tempYear = new Set();

    //car manufacturer dropdown values
    for (var itr of this.data){
      tempManu.add(itr.car)
      tempColor.add(itr.car_color)
      tempYear.add(itr.car_model_year)
    }
    this.manufacturerFilter = Array.from(tempManu.values() as unknown as string).sort();
    this.colourFilter = Array.from(tempColor.values()as unknown as string).sort();
    this.yearFilter = Array.from(tempYear.values()as unknown as string).sort();

    //console messages
    console.log(this.manufacturerFilter);
    console.log(this.colourFilter);
    console.log(this.yearFilter);
    
  }
  
  filterCars(){

  }

}
