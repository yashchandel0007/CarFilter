import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit {

  constructor(private _service: ServiceService) { }

  ngOnInit(): void {
  }

  data: any;

  getCars(){
    this.data = this._service.getCarData().subscribe();
  }
}
