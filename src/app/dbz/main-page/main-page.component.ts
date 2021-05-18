import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent  {


  nuevo:Personaje ={
    nombre:'Rochi',
    poder:1000
  }
  get personajes():Personaje[]{
    return  this.dbzService.personajes
  }
  constructor(
    private dbzService: DbzService,
  ){ }
}
 
