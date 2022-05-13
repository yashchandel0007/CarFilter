import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit {

  constructor(private _service: ServiceService) { }
  public carImage:string = 'assets/Images/carImage.jpg';

  ngOnInit(): void {
    this.getCars();

  }

  data: any;

  getCars(){
    this._service.getCarData().subscribe((response)=>{
      this.data = response;
      this.data = this.data.cars;
    });
  }
  
  filterCars(){

  }

}
