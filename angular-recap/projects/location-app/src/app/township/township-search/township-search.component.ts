import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DivisionService } from '../../util/services/division.service';
import { REGIONS } from '../../util/dto/regions';
import { TownshipService } from '../../util/services/township.service';

@Component({
  selector: 'app-township-search',
  templateUrl: './township-search.component.html'
})
export class TownshipSearchComponent implements OnInit{

  regions = REGIONS
  form : FormGroup
  divisions : any[] = []


  @Output()
  onAdd = new EventEmitter<any>

  @Output()
  onSearch = new EventEmitter<any>

  @Output()
  upload =  new EventEmitter<any>



  constructor(fb: FormBuilder,private divService: DivisionService,
            private townshipService : TownshipService){
    this.form = fb.group({
      region : '',
      division : 0,
      keyword: ''
    })
  }

  ngOnInit(): void {
      this.divService.search({}).subscribe(resp => this.divisions = resp)
  }

  addNew(){
    this.onAdd.emit(true)
  }

  search(form : any){
    this.townshipService.search
  }
}
