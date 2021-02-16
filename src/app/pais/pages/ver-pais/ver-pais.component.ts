import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap, tap} from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService   
    ) { }

  ngOnInit(): void {


      this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
        //switchMap((param)=> this.paisService.getPaisPorAlpha(param.id)), tap(console.log)

        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );

    /*this.activatedRoute.params
    .subscribe(({id}) =>{
      console.log(id);

      this.paisService.getPaisPorAlpha(id)
      .subscribe(pais =>{
        console.log(pais);
      });
    });



    .subscribe(params =>{
      console.log(params);
    })*/

  }

}
